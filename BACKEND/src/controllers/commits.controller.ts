import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerCommit = async (req: Request, res: Response) => {
  const { id_commit } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_COMMITS WHERE id_commit = :id_commit`, [id_commit]);
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
export const obtenerCommits = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_COMMITS ORDER BY id_commit ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarCommit = async (req: Request, res: Response) => {
  const {ID_COMMIT,ID_USUARIO,ID_REPOSITORIO,COMMIT_MESSAGE,COMMIT_DATE,CHANGES_COUNT} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_COMMITS 
      (ID_COMMIT, ID_USUARIO, ID_REPOSITORIO, COMMIT_MESSAGE, COMMIT_DATE, CHANGES_COUNT) 
      VALUES 
      (:ID_COMMIT, :ID_USUARIO, :ID_REPOSITORIO, :COMMIT_MESSAGE, TO_DATE(:COMMIT_DATE, 'DD-MON-RR'), :CHANGES_COUNT)
      `, 
       [ID_COMMIT,ID_USUARIO,ID_REPOSITORIO,COMMIT_MESSAGE,COMMIT_DATE,CHANGES_COUNT]
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
export const actualizarCommit = async (req: Request, res: Response) => {
  const { id_commit } = req.params;
  const {
         ID_USUARIO,
         ID_REPOSITORIO,
         COMMIT_MESSAGE,
         COMMIT_DATE,
         CHANGES_COUNT
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_COMMITS 
      SET 
          ID_USUARIO = :ID_USUARIO,
          ID_REPOSITORIO = :ID_REPOSITORIO,
          COMMIT_MESSAGE = :COMMIT_MESSAGE,
          COMMIT_DATE = TO_DATE(:COMMIT_DATE, 'DD-MON-RR'),
          CHANGES_COUNT = :CHANGES_COUNT
      WHERE 
          id_commit = :id_commit
      `, 
           [
            ID_USUARIO,
            ID_REPOSITORIO,
            COMMIT_MESSAGE,
            COMMIT_DATE,
            CHANGES_COUNT,
            id_commit
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
export const eliminarCommit = async (req: Request, res: Response) => {
  const { id_commit } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_COMMITS WHERE id_commit = :id_commit`, [id_commit]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};