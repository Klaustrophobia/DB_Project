import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerFile_modif = async (req: Request, res: Response) => {
  const { id_modification } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_FILE_MODIF WHERE id_modification = :id_modification`, [id_modification]);
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
export const obtenerFile_modifs = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_FILE_MODIF ORDER BY id_modification ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarFile_modif = async (req: Request, res: Response) => {
  const {ID_MODIFICATION,ID_COMMIT,FILE_PATH,LINES_ADDED,LINES_DELETED,MODIF_TYPE} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_FILE_MODIF 
      (ID_MODIFICATION, ID_COMMIT, FILE_PATH, LINES_ADDED, LINES_DELETED, MODIF_TYPE) 
      VALUES 
      (:ID_MODIFICATION, :ID_COMMIT, :FILE_PATH, :LINES_ADDED, :LINES_DELETED, :MODIF_TYPE)`, 
       [ID_MODIFICATION,ID_COMMIT,FILE_PATH,LINES_ADDED,LINES_DELETED,MODIF_TYPE]
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
export const actualizarFile_modif = async (req: Request, res: Response) => {
  const { id_modification } = req.params;
  const {
         ID_COMMIT,
         FILE_PATH,
         LINES_ADDED,
         LINES_DELETED,
         MODIF_TYPE
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_FILE_MODIF 
      SET 
          ID_COMMIT = :ID_COMMIT,
          FILE_PATH = :FILE_PATH,
          LINES_ADDED = :LINES_ADDED,
          LINES_DELETED = :LINES_DELETED,
          MODIF_TYPE = :MODIF_TYPE
      WHERE 
          id_modification = :id_modification`, 
           [
            ID_COMMIT,
            FILE_PATH,
            LINES_ADDED,
            LINES_DELETED,
            MODIF_TYPE,
            id_modification
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
export const eliminarFile_modif = async (req: Request, res: Response) => {
  const { id_modification } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_FILE_MODIF WHERE id_modification = :id_modification`, [id_modification]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};