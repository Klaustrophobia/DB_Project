import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerIssue = async (req: Request, res: Response) => {
  const { id_issues } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_ISSUES WHERE id_issues = :id_issues`, [id_issues]);
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
export const obtenerIssues = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_ISSUES ORDER BY id_issues ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarIssue = async (req: Request, res: Response) => {
  const {ID_ISSUES,ID_REPOSITORIO,TITULO_ISSUE,DESCRIPCION_ISSUE,ESTADO_ISSUE,FECHA_CREACION_ISSUE,FECHA_CIERRE_ISSUE,ULTIMA_FECHA_ACTUALIZACION} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_ISSUES 
      (ID_ISSUES, ID_REPOSITORIO, TITULO_ISSUE, DESCRIPCION_ISSUE, ESTADO_ISSUE, FECHA_CREACION_ISSUE, FECHA_CIERRE_ISSUE, ULTIMA_FECHA_ACTUALIZACION) 
      VALUES 
      (:ID_ISSUES, :ID_REPOSITORIO, :TITULO_ISSUE, :DESCRIPCION_ISSUE, :ESTADO_ISSUE, TO_DATE(:FECHA_CREACION_ISSUE, 'DD-MON-RR'), TO_DATE(:FECHA_CIERRE_ISSUE, 'DD-MON-RR'), TO_DATE(:ULTIMA_FECHA_ACTUALIZACION, 'DD-MON-RR'))`, 
       [ID_ISSUES,ID_REPOSITORIO,TITULO_ISSUE,DESCRIPCION_ISSUE,ESTADO_ISSUE,FECHA_CREACION_ISSUE,FECHA_CIERRE_ISSUE,ULTIMA_FECHA_ACTUALIZACION]
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
export const actualizarIssue = async (req: Request, res: Response) => {
  const { id_issues } = req.params;
  const {
         ID_REPOSITORIO,
         TITULO_ISSUE,
         DESCRIPCION_ISSUE,
         ESTADO_ISSUE,
         FECHA_CREACION_ISSUE,
         FECHA_CIERRE_ISSUE,
         ULTIMA_FECHA_ACTUALIZACION
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_ISSUES 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          TITULO_ISSUE = :TITULO_ISSUE,
          DESCRIPCION_ISSUE = :DESCRIPCION_ISSUE,
          ESTADO_ISSUE = :ESTADO_ISSUE,
          FECHA_CREACION_ISSUE = TO_DATE(:FECHA_CREACION_ISSUE, 'DD-MON-RR'),
          FECHA_CIERRE_ISSUE = TO_DATE(:FECHA_CIERRE_ISSUE, 'DD-MON-RR'),
          ULTIMA_FECHA_ACTUALIZACION = TO_DATE(:ULTIMA_FECHA_ACTUALIZACION, 'DD-MON-RR')
      WHERE 
          id_issues = :id_issues`, 
           [
            ID_REPOSITORIO,
            TITULO_ISSUE,
            DESCRIPCION_ISSUE,
            ESTADO_ISSUE,
            FECHA_CREACION_ISSUE,
            FECHA_CIERRE_ISSUE,
            ULTIMA_FECHA_ACTUALIZACION,
            id_issues
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
export const eliminarIssue = async (req: Request, res: Response) => {
  const { id_issues } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_ISSUES WHERE id_issues = :id_issues`, [id_issues]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};