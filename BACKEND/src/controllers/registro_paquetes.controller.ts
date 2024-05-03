import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerRegistro_paquete = async (req: Request, res: Response) => {
  const { id_registro } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_REGISTRO_PAQUETES WHERE id_registro = :id_registro`, [id_registro]);
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
export const obtenerRegistro_paquetes = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_REGISTRO_PAQUETES ORDER BY id_registro ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarRegistro_paquete = async (req: Request, res: Response) => {
  const {ID_REGISTRO,ID_REPOSITORIO,NOMBRE_PAQUETE,VERSION_PAQUETE,FECHA_CREACION} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_REGISTRO_PAQUETES 
      (ID_REGISTRO, ID_REPOSITORIO, NOMBRE_PAQUETE, VERSION_PAQUETE, FECHA_CREACION) 
      VALUES 
      (:ID_REGISTRO, :ID_REPOSITORIO, :NOMBRE_PAQUETE, :VERSION_PAQUETE, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'))`, 
       [ID_REGISTRO,ID_REPOSITORIO,NOMBRE_PAQUETE,VERSION_PAQUETE,FECHA_CREACION]
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
export const actualizarRegistro_paquete = async (req: Request, res: Response) => {
  const { id_registro } = req.params;
  const {
         ID_REPOSITORIO,
         NOMBRE_PAQUETE,
         VERSION_PAQUETE,
         FECHA_CREACION
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_REGISTRO_PAQUETES 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          NOMBRE_PAQUETE = :NOMBRE_PAQUETE,
          VERSION_PAQUETE = :VERSION_PAQUETE,
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR')
      WHERE 
          id_registro = :id_registro
      `, 
           [
            ID_REPOSITORIO,
            NOMBRE_PAQUETE,
            VERSION_PAQUETE,
            FECHA_CREACION,
            id_registro
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
export const eliminarRegistro_paquete = async (req: Request, res: Response) => {
  const { id_registro } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_REGISTRO_PAQUETES WHERE id_registro = :id_registro`, [id_registro]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};