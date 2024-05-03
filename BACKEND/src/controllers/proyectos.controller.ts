import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerProyecto = async (req: Request, res: Response) => {
  const { id_proyecto } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_PROYECTOS WHERE id_proyecto = :id_proyecto`, [id_proyecto]);
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
export const obtenerProyectos = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_PROYECTOS ORDER BY id_proyecto ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarProyecto = async (req: Request, res: Response) => {
  const {ID_PROYECTO,ID_USUARIO,NOMBRE,DESCRIPTION_PROYECTO,FECHA_CREACION} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_PROYECTOS 
      (ID_PROYECTO, ID_USUARIO, NOMBRE, DESCRIPTION_PROYECTO, FECHA_CREACION) 
      VALUES 
      (:ID_PROYECTO, :ID_USUARIO, :NOMBRE, :DESCRIPTION_PROYECTO, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'))
      `, 
       [ID_PROYECTO,ID_USUARIO,NOMBRE,DESCRIPTION_PROYECTO,FECHA_CREACION]
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
export const actualizarProyecto = async (req: Request, res: Response) => {
  const { id_proyecto } = req.params;
  const {
         ID_USUARIO,
         NOMBRE,
         DESCRIPTION_PROYECTO,
         FECHA_CREACION
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_PROYECTOS 
      SET 
          ID_USUARIO = :ID_USUARIO,
          NOMBRE = :NOMBRE,
          DESCRIPTION_PROYECTO = :DESCRIPTION_PROYECTO,
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR')
      WHERE 
          ID_PROYECTO = :ID_PROYECTO`, 
           [
            ID_USUARIO,
            NOMBRE,
            DESCRIPTION_PROYECTO,
            FECHA_CREACION,
            id_proyecto
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
export const eliminarProyecto = async (req: Request, res: Response) => {
  const { id_proyecto } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_PROYECTOS WHERE id_proyecto = :id_proyecto`, [id_proyecto]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};