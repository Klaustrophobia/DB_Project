import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerDeploy = async (req: Request, res: Response) => {
  const { id_deploy } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_DEPLOYMENT WHERE id_deploy = :id_deploy`, [id_deploy]);
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
export const obtenerDeploys = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_DEPLOYMENT ORDER BY id_deploy ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarDeploy = async (req: Request, res: Response) => {
  const {ID_DEPLOY,ID_USUARIO,ID_REPOSITORIO,ENTORNO,DATE_DEPLOY,STATUS} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_DEPLOYMENT 
      (ID_DEPLOY, ID_USUARIO, ID_REPOSITORIO, ENTORNO, DATE_DEPLOY, STATUS) 
      VALUES 
      (:ID_DEPLOY, :ID_USUARIO, :ID_REPOSITORIO, :ENTORNO, TO_DATE(:DATE_DEPLOY, 'DD-MON-RR'), :STATUS)
      `, 
       [ID_DEPLOY,ID_USUARIO,ID_REPOSITORIO,ENTORNO,DATE_DEPLOY,STATUS]
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
export const actualizarDeploy = async (req: Request, res: Response) => {
  const { id_deploy } = req.params;
  const {
         ID_USUARIO,
         ID_REPOSITORIO,
         ENTORNO,
         DATE_DEPLOY,
         STATUS
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_DEPLOYMENT 
      SET 
          ID_USUARIO = :ID_USUARIO,
          ID_REPOSITORIO = :ID_REPOSITORIO,
          ENTORNO = :ENTORNO,
          DATE_DEPLOY = TO_DATE(:DATE_DEPLOY, 'DD-MON-RR'),
          STATUS = :STATUS
      WHERE 
          id_deploy = :id_deploy
      `, 
           [
            ID_USUARIO,
            ID_REPOSITORIO,
            ENTORNO,
            DATE_DEPLOY,
            STATUS,
            id_deploy
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
export const eliminarDeploy = async (req: Request, res: Response) => {
  const { id_deploy } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_DEPLOYMENT WHERE id_deploy = :id_deploy`, [id_deploy]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};