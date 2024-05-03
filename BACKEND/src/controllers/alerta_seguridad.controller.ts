import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerAlerta = async (req: Request, res: Response) => {
  const { id_alerta } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_ALERTA_SEGURIDAD WHERE id_alerta = :id_alerta`, [id_alerta]);
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
export const obtenerAlertas = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_ALERTA_SEGURIDAD ORDER BY id_alerta ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarAlerta = async (req: Request, res: Response) => {
  const {ID_ALERTA,ID_REPOSITORIO,DESCRIPCION,GRAVEDAD,FECHA_CREACION} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_ALERTA_SEGURIDAD 
      (ID_ALERTA, ID_REPOSITORIO, DESCRIPCION, GRAVEDAD, FECHA_CREACION) 
      VALUES 
      (:ID_ALERTA, :ID_REPOSITORIO, :DESCRIPCION, :GRAVEDAD, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'))`, 
       [ID_ALERTA,ID_REPOSITORIO,DESCRIPCION,GRAVEDAD,FECHA_CREACION]
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
export const actualizarAlerta = async (req: Request, res: Response) => {
  const { id_alerta } = req.params;
  const {
         ID_REPOSITORIO,
         DESCRIPCION,
         GRAVEDAD,
         FECHA_CREACION
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_ALERTA_SEGURIDAD 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          DESCRIPCION = :DESCRIPCION,
          GRAVEDAD = :GRAVEDAD,
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR')
      WHERE 
          id_alerta = :id_alerta
      `, 
           [
            ID_REPOSITORIO,
            DESCRIPCION,
            GRAVEDAD,
            FECHA_CREACION,
            id_alerta
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
export const eliminarAlerta = async (req: Request, res: Response) => {
  const { id_alerta } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_ALERTA_SEGURIDAD WHERE id_alerta = :id_alerta`, [id_alerta]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};