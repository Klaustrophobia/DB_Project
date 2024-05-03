import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerSecreto = async (req: Request, res: Response) => {
  const { id_secrets } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_SECRETOS WHERE id_secrets = :id_secrets`, [id_secrets]);
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
export const obtenerSecretos = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_SECRETOS ORDER BY ID_secrets ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarSecreto = async (req: Request, res: Response) => {
  const {ID_SECRETS,ID_REPOSITORIO,NOMBRE,VALOR,FECHA_CREACION} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_SECRETOS 
      (ID_SECRETS, ID_REPOSITORIO, NOMBRE, VALOR, FECHA_CREACION) 
      VALUES 
      (:ID_SECRETS, :ID_REPOSITORIO, :NOMBRE, :VALOR, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'))
      `, 
       [ID_SECRETS,ID_REPOSITORIO,NOMBRE,VALOR,FECHA_CREACION]
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
export const actualizarSecreto = async (req: Request, res: Response) => {
  const { id_secrets } = req.params;
  const {
         ID_REPOSITORIO,
         NOMBRE,
         VALOR,
         FECHA_CREACION
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_SECRETOS 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          NOMBRE = :NOMBRE, 
          VALOR = :VALOR, 
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR')
      WHERE 
          ID_SECRETS = :ID_SECRETS `, 
           [
            ID_REPOSITORIO,
            NOMBRE,
            VALOR,
            FECHA_CREACION,
            id_secrets
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
export const eliminarSecreto = async (req: Request, res: Response) => {
  const { id_secrets } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_SECRETOS WHERE id_secrets = :id_secrets`, [id_secrets]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};
