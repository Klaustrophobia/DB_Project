import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerPull_request = async (req: Request, res: Response) => {
  const { id_pull_request } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_PULL_REQUEST WHERE id_pull_request = :id_pull_request`, [id_pull_request]);
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
export const obtenerPull_requests = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_PULL_REQUEST ORDER BY id_pull_request ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarPull_request = async (req: Request, res: Response) => {
  const {ID_PULL_REQUEST,ID_REPOSITORIO,TITULO,DESCRIPTION,ESTADO,FECHA_CREACION,FECHA_CIERRE,FECHA_MERGE,RAMA_BASE,NUMERO_COMMITS,REVIEW_STATUS} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_PULL_REQUEST 
      (ID_PULL_REQUEST, ID_REPOSITORIO, TITULO, DESCRIPTION, ESTADO, FECHA_CREACION, FECHA_CIERRE, FECHA_MERGE, RAMA_BASE, NUMERO_COMMITS, REVIEW_STATUS) 
      VALUES 
      (:ID_PULL_REQUEST, :ID_REPOSITORIO, :TITULO, :DESCRIPTION, :ESTADO, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'), TO_DATE(:FECHA_CIERRE, 'DD-MON-RR'), TO_DATE(:FECHA_MERGE, 'DD-MON-RR'), :RAMA_BASE, :NUMERO_COMMITS, :REVIEW_STATUS)
      `, 
       [ID_PULL_REQUEST,ID_REPOSITORIO,TITULO,DESCRIPTION,ESTADO,FECHA_CREACION,FECHA_CIERRE,FECHA_MERGE,RAMA_BASE,NUMERO_COMMITS,REVIEW_STATUS]
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
export const actualizarPull_request = async (req: Request, res: Response) => {
  const { id_pull_request } = req.params;
  const {
         ID_REPOSITORIO,
         TITULO,
         DESCRIPTION,
         ESTADO,
         FECHA_CREACION,
         FECHA_CIERRE,
         FECHA_MERGE,
         RAMA_BASE,
         NUMERO_COMMITS,
         REVIEW_STATUS
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_PULL_REQUEST 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          TITULO = :TITULO,
          DESCRIPTION = :DESCRIPTION,
          ESTADO = :ESTADO,
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR'),
          FECHA_CIERRE = TO_DATE(:FECHA_CIERRE, 'DD-MON-RR'),
          FECHA_MERGE = TO_DATE(:FECHA_MERGE, 'DD-MON-RR'),
          RAMA_BASE = :RAMA_BASE,
          NUMERO_COMMITS = :NUMERO_COMMITS,
          REVIEW_STATUS = :REVIEW_STATUS
      WHERE 
          id_pull_request = :id_pull_request`, 
           [
            ID_REPOSITORIO,
            TITULO,
            DESCRIPTION,
            ESTADO,
            FECHA_CREACION,
            FECHA_CIERRE,
            FECHA_MERGE,
            RAMA_BASE,
            NUMERO_COMMITS,
            REVIEW_STATUS,
            id_pull_request
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
export const eliminarPull_request = async (req: Request, res: Response) => {
  const { id_pull_request } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_PULL_REQUEST WHERE id_pull_request = :id_pull_request`, [id_pull_request]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};