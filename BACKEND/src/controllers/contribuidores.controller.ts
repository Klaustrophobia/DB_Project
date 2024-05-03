import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerContribuidor = async (req: Request, res: Response) => {
  const { id_contribuidor } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_CONTRIBUIDORES WHERE id_contribuidor = :id_contribuidor`, [id_contribuidor]);
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
export const obtenerContribuidores = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_CONTRIBUIDORES ORDER BY id_contribuidor ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarContribuidor = async (req: Request, res: Response) => {
  const {ID_CONTRIBUIDOR, ID_USUARIO, ID_REPOSITORIO, CANTIDAD_CONTRIBUICIONES, DATE_FIRST_CTRB, DATE_LAST_CTRB} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_CONTRIBUIDORES 
      (ID_CONTRIBUIDOR, ID_USUARIO, ID_REPOSITORIO, CANTIDAD_CONTRIBUICIONES, DATE_FIRST_CTRB, DATE_LAST_CTRB) 
      VALUES 
      (:ID_CONTRIBUIDOR, :ID_USUARIO, :ID_REPOSITORIO, :CANTIDAD_CONTRIBUICIONES, TO_DATE(:DATE_FIRST_CTRB, 'DD-MON-RR'), TO_DATE(:DATE_LAST_CTRB, 'DD-MON-RR'))`, 
       [ID_CONTRIBUIDOR, ID_USUARIO, ID_REPOSITORIO, CANTIDAD_CONTRIBUICIONES, DATE_FIRST_CTRB, DATE_LAST_CTRB]
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
export const actualizarContribuidor = async (req: Request, res: Response) => {
  const { id_contribuidor } = req.params;
  const {
         ID_USUARIO, 
         ID_REPOSITORIO, 
         CANTIDAD_CONTRIBUICIONES, 
         DATE_FIRST_CTRB, 
         DATE_LAST_CTRB
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_CONTRIBUIDORES 
      SET 
          ID_USUARIO = :ID_USUARIO,
          ID_REPOSITORIO = :ID_REPOSITORIO,
          CANTIDAD_CONTRIBUICIONES = :CANTIDAD_CONTRIBUICIONES,
          DATE_FIRST_CTRB = TO_DATE(:DATE_FIRST_CTRB, 'DD-MON-RR'),
          DATE_LAST_CTRB = TO_DATE(:DATE_LAST_CTRB, 'DD-MON-RR')
      WHERE 
          id_contribuidor = :id_contribuidor`, 
           [
            ID_USUARIO, 
            ID_REPOSITORIO, 
            CANTIDAD_CONTRIBUICIONES, 
            DATE_FIRST_CTRB, 
            DATE_LAST_CTRB,
            id_contribuidor
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
export const eliminarContribuidor = async (req: Request, res: Response) => {
  const { id_contribuidor } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_CONTRIBUIDORES WHERE id_contribuidor = :id_contribuidor`, [id_contribuidor]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};