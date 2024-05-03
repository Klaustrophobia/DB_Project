import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerEquipo = async (req: Request, res: Response) => {
  const { id_equipo } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_EQUIPO WHERE id_equipo = :id_equipo`, [id_equipo]);
    await connection.close();

    if (result.rows.length === 0) {
      res.status(404).send({ message: ' no encontrado' });
    } else {
      res.send(result.rows[0]);
    }
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor' });
  }
};

// Función para obtener todos los usuarios
export const obtenerEquipos = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_EQUIPO ORDER BY id_equipo ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarEquipo = async (req: Request, res: Response) => {
  const {ID_EQUIPO,ID_ORGANIZACION,NOMBRE_EQUIPO,DESCRIPTION,FECHA_CREACION} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_EQUIPO 
      (ID_EQUIPO, ID_ORGANIZACION, NOMBRE_EQUIPO, DESCRIPTION, FECHA_CREACION) 
      VALUES 
      (:ID_EQUIPO, :ID_ORGANIZACION, :NOMBRE_EQUIPO, :DESCRIPTION, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'))
      `, 
       [ID_EQUIPO,ID_ORGANIZACION,NOMBRE_EQUIPO,DESCRIPTION,FECHA_CREACION]
      );
    await connection.commit();
    await connection.close();

    res.status(201).send({ message: ' agregado exitosamente' });
  } catch (error) {
    console.error('Error al agregar:', error);
    res.status(500).send({ message: 'Error en el servidor al agregar' });
  }
};


// Función para actualizar un usuario
export const actualizarEquipo = async (req: Request, res: Response) => {
  const { id_equipo } = req.params;
  const {
         ID_ORGANIZACION,
         NOMBRE_EQUIPO,
         DESCRIPTION,
         FECHA_CREACION
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_EQUIPO 
      SET 
          ID_ORGANIZACION = :ID_ORGANIZACION,
          NOMBRE_EQUIPO = :NOMBRE_EQUIPO,
          DESCRIPTION = :DESCRIPTION,
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR')
      WHERE 
          id_equipo = :id_equipo;
      `, 
           [
            ID_ORGANIZACION,
            NOMBRE_EQUIPO,
            DESCRIPTION,
            FECHA_CREACION,
            id_equipo
           ]
      );
    await connection.commit();
    await connection.close();

    res.send({ message: ' actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar :', error);
    res.status(500).send({ message: 'Error en el servidor al actualizar' });
  }
};


// Función para eliminar un usuario
export const eliminarEquipo = async (req: Request, res: Response) => {
  const { id_equipo } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_EQUIPO WHERE id_equipo = :id_equipo`, [id_equipo]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};