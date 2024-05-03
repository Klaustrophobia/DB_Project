import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerConfig = async (req: Request, res: Response) => {
  const { id_configuracion } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_CONFIG_ACCESO_REPOSITORIO WHERE id_configuracion = :id_configuracion`, [id_configuracion]);
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
export const obtenerConfigs = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_CONFIG_ACCESO_REPOSITORIO ORDER BY id_configuracion ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarConfig = async (req: Request, res: Response) => {
  const {ID_CONFIGURACION,ID_REPOSITORIO,TIPO_ACCESO,FECHA_CREACION} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_CONFIG_ACCESO_REPOSITORIO 
      (ID_CONFIGURACION, ID_REPOSITORIO, TIPO_ACCESO, FECHA_CREACION) 
      VALUES 
      (:ID_CONFIGURACION, :ID_REPOSITORIO, :TIPO_ACCESO, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'))`, 
       [ID_CONFIGURACION,ID_REPOSITORIO,TIPO_ACCESO,FECHA_CREACION]
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
export const actualizarConfig = async (req: Request, res: Response) => {
  const { id_configuracion } = req.params;
  const {
         ID_REPOSITORIO,
         TIPO_ACCESO,
         FECHA_CREACION
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_CONFIG_ACCESO_REPOSITORIO 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          TIPO_ACCESO = :TIPO_ACCESO,
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR')
      WHERE 
          id_configuracion = :id_configuracion
      `, 
           [
            ID_REPOSITORIO,
            TIPO_ACCESO,
            FECHA_CREACION,
            id_configuracion
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
export const eliminarConfig = async (req: Request, res: Response) => {
  const { id_configuracion } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_CONFIG_ACCESO_REPOSITORIO WHERE id_configuracion = :id_configuracion`, [id_configuracion]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};