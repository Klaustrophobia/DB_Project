import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerFile = async (req: Request, res: Response) => {
  const { id_file } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_FILE WHERE id_file = :id_file`, [id_file]);
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
export const obtenerFiles = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_FILE ORDER BY id_file ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarFile = async (req: Request, res: Response) => {
  const {ID_FILE,ID_REPOSITORIO,NOMBRE_ARCHIVO,EXTENSION,TAMANIO,DATE_LAST_MODIF} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_FILE 
      (ID_FILE, ID_REPOSITORIO, NOMBRE_ARCHIVO, EXTENSION, TAMANIO, DATE_LAST_MODIF) 
      VALUES 
      (:ID_FILE, :ID_REPOSITORIO, :NOMBRE_ARCHIVO, :EXTENSION, :TAMANIO, TO_DATE(:DATE_LAST_MODIF, 'DD-MON-RR'))
      `, 
       [ID_FILE,ID_REPOSITORIO,NOMBRE_ARCHIVO,EXTENSION,TAMANIO,DATE_LAST_MODIF]
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
export const actualizarFile = async (req: Request, res: Response) => {
  const { id_file } = req.params;
  const {
         ID_REPOSITORIO,
         NOMBRE_ARCHIVO,
         EXTENSION,
         TAMANIO,
         DATE_LAST_MODIF
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_FILE 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          NOMBRE_ARCHIVO = :NOMBRE_ARCHIVO,
          EXTENSION = :EXTENSION,
          TAMANIO = :TAMANIO,
          DATE_LAST_MODIF = TO_DATE(:DATE_LAST_MODIF, 'DD-MON-RR')
      WHERE 
          id_file = :id_file`, 
           [
            ID_REPOSITORIO,
            NOMBRE_ARCHIVO,
            EXTENSION,
            TAMANIO,
            DATE_LAST_MODIF,
            id_file
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
export const eliminarFile = async (req: Request, res: Response) => {
  const { id_file } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_FILE WHERE id_file = :id_file`, [id_file]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};