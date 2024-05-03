import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerLabel = async (req: Request, res: Response) => {
  const { id_label } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_LABELS WHERE id_label = :id_label`, [id_label]);
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
export const obtenerLabels = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_LABELS ORDER BY id_label ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarLabel = async (req: Request, res: Response) => {
  const {ID_LABEL,ID_REPOSITORIO,NOMBRE,DESCRPTION,FECHA_CREACION,FECHA_ULT_ACT,NIVEL_PRIORIDAD,RESTRCCIONES,SCOPE} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_LABELS 
      (ID_LABEL, ID_REPOSITORIO, NOMBRE, DESCRPTION, FECHA_CREACION, FECHA_ULT_ACT, NIVEL_PRIORIDAD, RESTRCCIONES, SCOPE) 
      VALUES 
      (:ID_LABEL, :ID_REPOSITORIO, :NOMBRE, :DESCRPTION, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'), TO_DATE(:FECHA_ULT_ACT, 'DD-MON-RR'), :NIVEL_PRIORIDAD, :RESTRCCIONES, :SCOPE)`, 
       [ID_LABEL,ID_REPOSITORIO,NOMBRE,DESCRPTION,FECHA_CREACION,FECHA_ULT_ACT,NIVEL_PRIORIDAD,RESTRCCIONES,SCOPE]
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
export const actualizarLabel = async (req: Request, res: Response) => {
  const { id_label } = req.params;
  const {
         ID_REPOSITORIO,
         NOMBRE,
         DESCRPTION,
         FECHA_CREACION,
         FECHA_ULT_ACT,
         NIVEL_PRIORIDAD,
         RESTRCCIONES,
         SCOPE
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_LABELS 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          NOMBRE = :NOMBRE,
          DESCRPTION = :DESCRPTION,
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR'),
          FECHA_ULT_ACT = TO_DATE(:FECHA_ULT_ACT, 'DD-MON-RR'),
          NIVEL_PRIORIDAD = :NIVEL_PRIORIDAD,
          RESTRCCIONES = :RESTRCCIONES,
          SCOPE = :SCOPE
      WHERE 
          id_label = :id_label`, 
           [
            ID_REPOSITORIO,
            NOMBRE,
            DESCRPTION,
            FECHA_CREACION,
            FECHA_ULT_ACT,
            NIVEL_PRIORIDAD,
            RESTRCCIONES,
            SCOPE,
            id_label
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
export const eliminarLabel = async (req: Request, res: Response) => {
  const { id_label } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_LABELS WHERE id_label = :id_label`, [id_label]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};