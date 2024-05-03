import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerOrganizacion = async (req: Request, res: Response) => {
  const { id_organizacion } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_ORGANIZACION WHERE id_organizacion = :id_organizacion`, [id_organizacion]);
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
export const obtenerOrganizaciones = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_ORGANIZACION ORDER BY id_organizacion ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarOrganizacion = async (req: Request, res: Response) => {
  const {ID_ORGANIZACION,ID_USUARIO,NOMBRE,DESCRIPCION,FECHA_CREACION,LOCACION,WEBSITE,NUMERO_MIEMBROS} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_ORGANIZACION 
      (ID_ORGANIZACION, ID_USUARIO, NOMBRE, DESCRIPCION, FECHA_CREACION, LOCACION, WEBSITE, NUMERO_MIEMBROS) 
      VALUES 
      (:ID_ORGANIZACION, :ID_USUARIO, :NOMBRE, :DESCRIPCION, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'), :LOCACION, :WEBSITE, :NUMERO_MIEMBROS)`, 
       [ID_ORGANIZACION,ID_USUARIO,NOMBRE,DESCRIPCION,FECHA_CREACION,LOCACION,WEBSITE,NUMERO_MIEMBROS]
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
export const actualizarOrganizacion = async (req: Request, res: Response) => {
  const { id_organizacion } = req.params;
  const {
         ID_USUARIO,
         NOMBRE,
         DESCRIPCION,
         FECHA_CREACION,
         LOCACION,
         WEBSITE,
         NUMERO_MIEMBROS
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_ORGANIZACION 
      SET 
          ID_USUARIO = :ID_USUARIO,
          NOMBRE = :NOMBRE,
          DESCRIPCION = :DESCRIPCION,
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR'),
          LOCACION = :LOCACION,
          WEBSITE = :WEBSITE,
          NUMERO_MIEMBROS = :NUMERO_MIEMBROS
      WHERE 
          id_organizacion = :id_organizacion;
      `, 
           [
            ID_USUARIO,
            NOMBRE,
            DESCRIPCION,
            FECHA_CREACION,
            LOCACION,
            WEBSITE,
            NUMERO_MIEMBROS,
            id_organizacion
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
export const eliminarOrganizacion = async (req: Request, res: Response) => {
  const { id_organizacion } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_ORGANIZACION WHERE id_organizacion = :id_organizacion`, [id_organizacion]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};