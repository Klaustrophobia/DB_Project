import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



// Función para obtener un usuario por su ID
export const obtenerMilestone = async (req: Request, res: Response) => {
  const { id_milestone } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_MILESTONES WHERE id_milestone = :id_milestone`, [id_milestone]);
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
export const obtenerMilestones = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_MILESTONES ORDER BY id_milestone ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener :', error);
    res.status(500).send({ message: 'Error en el servidor al obtener' });
  }
};

// Función para agregar un nuevo usuario
export const agregarMilestone = async (req: Request, res: Response) => {
  const {ID_MILESTONE,ID_REPOSITORIO,TITTLE_MILESTONE,DESCRIPTION_MILESTONE,DUE_DATE} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_MILESTONES 
      (ID_MILESTONE, ID_REPOSITORIO, TITTLE_MILESTONE, DESCRIPTION_MILESTONE, DUE_DATE) 
      VALUES 
      (:ID_MILESTONE, :ID_REPOSITORIO, :TITTLE_MILESTONE, :DESCRIPTION_MILESTONE, TO_DATE(:DUE_DATE, 'DD-MON-RR'))`, 
       [ID_MILESTONE,ID_REPOSITORIO,TITTLE_MILESTONE,DESCRIPTION_MILESTONE,DUE_DATE]
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
export const actualizarMilestone = async (req: Request, res: Response) => {
  const { id_milestone } = req.params;
  const {
         ID_REPOSITORIO,
         TITTLE_MILESTONE,
         DESCRIPTION_MILESTONE,
         DUE_DATE
  } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_MILESTONES 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          TITTLE_MILESTONE = :TITTLE_MILESTONE,
          DESCRIPTION_MILESTONE = :DESCRIPTION_MILESTONE,
          DUE_DATE = TO_DATE(:DUE_DATE, 'DD-MON-RR')
      WHERE 
          id_milestone = :id_milestone`, 
           [
            ID_REPOSITORIO,
            TITTLE_MILESTONE,
            DESCRIPTION_MILESTONE,
            DUE_DATE,
            id_milestone
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
export const eliminarMilestone = async (req: Request, res: Response) => {
  const { id_milestone } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_MILESTONES WHERE id_milestone = :id_milestone`, [id_milestone]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar' });
  }
};