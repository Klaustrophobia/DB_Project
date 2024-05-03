import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerDiscuss_coment = async (req: Request, res: Response) => {
  const { id_comentario } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_DISCUSS_COMMENT WHERE id_comentario = :id_comentario`, [id_comentario]);
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
export const obtenerDiscuss_coments = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_DISCUSS_COMMENT ORDER BY id_comentario ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarDiscuss_coment = async (req: Request, res: Response) => {
  const {ID_COMENTARIO,ID_USUARIO,ID_DISCUSION,CONTENIDO,FECHA_CREACION} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_DISCUSS_COMMENT 
      (ID_COMENTARIO, ID_USUARIO, ID_DISCUSION, CONTENIDO, FECHA_CREACION) 
      VALUES 
      (:ID_COMENTARIO, :ID_USUARIO, :ID_DISCUSION, :CONTENIDO, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'))`, 
       [ID_COMENTARIO,ID_USUARIO,ID_DISCUSION,CONTENIDO,FECHA_CREACION]
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
export const actualizarDiscuss_coment = async (req: Request, res: Response) => {
  const { id_comentario } = req.params;
  const {
         ID_USUARIO,
         ID_DISCUSION,
         CONTENIDO,
         FECHA_CREACION
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_DISCUSS_COMMENT 
      SET 
          ID_USUARIO = :ID_USUARIO,
          ID_DISCUSION = :ID_DISCUSION,
          CONTENIDO = :CONTENIDO,
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR')
      WHERE 
          id_comentario = :id_comentario`, 
           [
            ID_USUARIO,
            ID_DISCUSION,
            CONTENIDO,
            FECHA_CREACION,
            id_comentario
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
export const eliminarDiscuss_coment = async (req: Request, res: Response) => {
  const { id_comentario } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_DISCUSS_COMMENT WHERE id_comentario = :id_comentario`, [id_comentario]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};