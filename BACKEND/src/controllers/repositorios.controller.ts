import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerRepositorio = async (req: Request, res: Response) => {
  const { id_repositorio } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_REPOSITORIO WHERE id_repositorio = :id_repositorio`, [id_repositorio]);
    await connection.close();

    if (result.rows.length === 0) {
      res.status(404).send({ message: 'repositorio no encontrado' });
    } else {
      res.send(result.rows[0]);
    }
  } catch (error) {
    console.error('Error al obtener repositorio:', error);
    res.status(500).send({ message: 'Error en el servidor al obtener repositorio' });
  }
};

// Función para obtener todos los usuarios
export const obtenerRepositorios = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_REPOSITORIO ORDER BY ID_USUARIO ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarRepositorio = async (req: Request, res: Response) => {
  const {ID_REPOSITORIO,ID_USUARIO,NOMBRE_REPOSITORIO,DESCRIPCION,FECHA_CREACION_REPOSITORIO,FECHA_ULTIMA_ACTUALIZACION,NUMERO_ESTRELLAS,NUMERO_FORKS,LENGUAJE_PRINCIPAL,CANTIDAD_PULLS,CANTIDAD_ISSUES} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `Insert into C##GITHUB.TBL_REPOSITORIO 
      (ID_REPOSITORIO, ID_USUARIO, NOMBRE_REPOSITORIO, DESCRIPCION, FECHA_CREACION_REPOSITORIO, FECHA_ULTIMA_ACTUALIZACION, NUMERO_ESTRELLAS, NUMERO_FORKS, LENGUAJE_PRINCIPAL, CANTIDAD_PULLS, CANTIDAD_ISSUES) 
      values (:ID_REPOSITORIO, 
              :ID_USUARIO, 
              :NOMBRE_REPOSITORIO, 
              :DESCRIPCION, 
              to_date(:FECHA_CREACION_REPOSITORIO,'DD-MON-RR'), 
              to_date(:FECHA_ULTIMA_ACTUALIZACION,'DD-MON-RR'), 
              :NUMERO_ESRELLAS, 
              :NUMERO_FORKS, 
              :LENGUAJE_PRINCIPAL, 
              :CANTIDAD_PULLS, 
              :CANTIDAD_ISSUES)`, 
       [ID_REPOSITORIO,ID_USUARIO,NOMBRE_REPOSITORIO,DESCRIPCION,FECHA_CREACION_REPOSITORIO,FECHA_ULTIMA_ACTUALIZACION,NUMERO_ESTRELLAS,NUMERO_FORKS,LENGUAJE_PRINCIPAL,CANTIDAD_PULLS,CANTIDAD_ISSUES]
      );
    await connection.commit();
    await connection.close();

    res.status(201).send({ message: ' repositorio agregado exitosamente' });
  } catch (error) {
    console.error('Error al agregar:', error);
    res.status(500).send({ message: 'Error en el servidor al agregar' });
  }
};


// Función para actualizar un usuario
export const actualizarRepositorio = async (req: Request, res: Response) => {
  const { id_repositorio } = req.params;
  const {ID_USUARIO,
         NOMBRE_REPOSITORIO,
         DESCRIPCION,
         FECHA_CREACION_REPOSITORIO,
         FECHA_ULTIMA_ACTUALIZACION,
         NUMERO_ESTRELLAS,
         NUMERO_FORKS,
         LENGUAJE_PRINCIPAL,
         CANTIDAD_PULLS,
         CANTIDAD_ISSUES
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_REPOSITORIO 
      SET 
          id_usuario = :id_usuario,
          NOMBRE_REPOSITORIO = :NOMBRE_REPOSITORIO, 
          DESCRIPCION = :DESCRIPCION, 
          FECHA_CREACION_REPOSITORIO = TO_DATE(:FECHA_CREACION_REPOSITORIO, 'DD-MON-RR'), 
          FECHA_ULTIMA_ACTUALIZACION = TO_DATE(:FECHA_ULTIMA_ACTUALIZACION, 'DD-MON-RR'), 
          NUMERO_ESTRELLAS = :NUMERO_ESTRELLAS, 
          NUMERO_FORKS = :NUMERO_FORKS, 
          LENGUAJE_PRINCIPAL = :LENGUAJE_PRINCIPAL, 
          CANTIDAD_PULLS = :CANTIDAD_PULLS, 
          CANTIDAD_ISSUES = :CANTIDAD_ISSUES 
      WHERE 
          id_repositorio = :id_repositorio`, 
           [ID_USUARIO,
            NOMBRE_REPOSITORIO,
            DESCRIPCION,
            FECHA_CREACION_REPOSITORIO,
            FECHA_ULTIMA_ACTUALIZACION,
            NUMERO_ESTRELLAS,
            NUMERO_FORKS,
            LENGUAJE_PRINCIPAL,
            CANTIDAD_PULLS,
            CANTIDAD_ISSUES, 
            id_repositorio
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
export const eliminarRepositorio = async (req: Request, res: Response) => {
  const { id_repositorio } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_USUARIOS WHERE id_repositorio = :id_repositorio`, [id_repositorio]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar usuario' });
  }
};
