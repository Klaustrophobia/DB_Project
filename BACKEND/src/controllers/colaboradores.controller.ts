import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerColaborador = async (req: Request, res: Response) => {
  const { id_colaborador } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_COLABORADORES WHERE id_colaborador = :id_colaborador`, [id_colaborador]);
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
export const obtenerColaboradores = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_COLABORADORES ORDER BY id_colaborador ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarColaborador = async (req: Request, res: Response) => {
  const {ID_COLABORADOR,ID_REPOSITORIO,NIVEL_PERMISO,FECHA_UNION,ULTIMA_FECHA_ACCESO,STATUS,COMENTARIOS} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_COLABORADORES 
      (ID_COLABORADOR, ID_REPOSITORIO, NIVEL_PERMISO, FECHA_UNION, ULTIMA_FECHA_ACCESO, STATUS, COMENTARIOS) 
      VALUES 
      (:ID_COLABORADOR, :ID_REPOSITORIO, :NIVEL_PERMISO, TO_DATE(:FECHA_UNION, 'DD-MON-RR'), TO_DATE(:ULTIMA_FECHA_ACCESO, 'DD-MON-RR'), :STATUS, :COMENTARIOS);
      `, 
       [ID_COLABORADOR,ID_REPOSITORIO,NIVEL_PERMISO,FECHA_UNION,ULTIMA_FECHA_ACCESO,STATUS,COMENTARIOS]
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
export const actualizarColaborador = async (req: Request, res: Response) => {
  const { id_colaborador } = req.params;
  const {
         ID_REPOSITORIO,
         NIVEL_PERMISO,
         FECHA_UNION,
         ULTIMA_FECHA_ACCESO,
         STATUS,
         COMENTARIOS
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_COLABORADORES 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          NIVEL_PERMISO = :NIVEL_PERMISO,
          FECHA_UNION = TO_DATE(:FECHA_UNION, 'DD-MON-RR'),
          ULTIMA_FECHA_ACCESO = TO_DATE(:ULTIMA_FECHA_ACCESO, 'DD-MON-RR'),
          STATUS = :STATUS,
          COMENTARIOS = :COMENTARIOS
      WHERE 
          id_colaborador = :id_colaborador
      `, 
           [
            ID_REPOSITORIO,
            NIVEL_PERMISO,
            FECHA_UNION,
            ULTIMA_FECHA_ACCESO,
            STATUS,
            COMENTARIOS,
            id_colaborador
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
export const eliminarColaborador = async (req: Request, res: Response) => {
  const { id_colaborador } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_COLABORADORES WHERE id_colaborador = :id_colaborador`, [id_colaborador]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};