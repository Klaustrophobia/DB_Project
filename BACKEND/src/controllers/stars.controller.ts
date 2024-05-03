import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerStar = async (req: Request, res: Response) => {
  const { id_estrella } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_STARS WHERE id_estrella = :id_estrella`, [id_estrella]);
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
export const obtenerStars = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_STARS ORDER BY id_estrella ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarStar = async (req: Request, res: Response) => {
  const {ID_ESTRELLA,ID_USUARIO,ID_REPOSITORIO,FECHA_ESTRELLA} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_STARS 
      (ID_ESTRELLA, ID_USUARIO, ID_REPOSITORIO, FECHA_ESTRELLA) 
      VALUES 
      (:ID_ESTRELLA, :ID_USUARIO, :ID_REPOSITORIO, TO_DATE(:FECHA_ESTRELLA, 'DD-MON-RR'))
      `, 
       [ID_ESTRELLA,ID_USUARIO,ID_REPOSITORIO,FECHA_ESTRELLA]
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
export const actualizarStar = async (req: Request, res: Response) => {
  const { id_estrella } = req.params;
  const {
         ID_USUARIO,
         ID_REPOSITORIO,
         FECHA_ESTRELLA
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_STARS 
      SET 
          ID_USUARIO = :ID_USUARIO, 
          ID_REPOSITORIO = :ID_REPOSITORIO, 
          FECHA_ESTRELLA = TO_DATE(:FECHA_ESTRELLA, 'DD-MON-RR')
      WHERE 
          ID_ESTRELLA = :ID_ESTRELLA`, 
           [
            ID_USUARIO,
            ID_REPOSITORIO,
            FECHA_ESTRELLA,
            id_estrella
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
export const eliminarStar = async (req: Request, res: Response) => {
  const { id_estrella } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_STARS WHERE id_estrella = :id_estrella`, [id_estrella]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};