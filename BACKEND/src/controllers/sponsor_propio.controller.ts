import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerSponsor_propio = async (req: Request, res: Response) => {
  const { id_sponsor_propio } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_SPONSOR_PROPIO WHERE id_sponsor_propio = :id_sponsor_propio`, [id_sponsor_propio]);
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
export const obtenerSponsor_propios = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_SPONSOR_PROPIO ORDER BY id_sponsor_propio ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarSponsor_propio = async (req: Request, res: Response) => {
  const {ID_SPONSOR_PROPIO,ID_SPONSOR_ELEGIBLE,ID_USUARIO} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_SPONSOR_PROPIO 
      (ID_SPONSOR_PROPIO, ID_SPONSOR_ELEGIBLE, ID_USUARIO) 
      VALUES 
      (:ID_SPONSOR_PROPIO, :ID_SPONSOR_ELEGIBLE, :ID_USUARIO)
      
      `, 
       [ID_SPONSOR_PROPIO,ID_SPONSOR_ELEGIBLE,ID_USUARIO]
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
export const actualizarSponsor_propio = async (req: Request, res: Response) => {
  const { id_sponsor_propio } = req.params;
  const {
         ID_SPONSOR_ELEGIBLE,
         ID_USUARIO
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_SPONSOR_PROPIO 
      SET 
          ID_SPONSOR_ELEGIBLE = :ID_SPONSOR_ELEGIBLE,
          ID_USUARIO = :ID_USUARIO
      WHERE 
          id_sponsor_propio = :id_sponsor_propio`, 
           [
            ID_SPONSOR_ELEGIBLE,
            ID_USUARIO,
            id_sponsor_propio
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
export const eliminarSponsor_propio = async (req: Request, res: Response) => {
  const { id_sponsor_propio } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_SPONSOR_PROPIO WHERE id_sponsor_propio = :id_sponsor_propio`, [id_sponsor_propio]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};