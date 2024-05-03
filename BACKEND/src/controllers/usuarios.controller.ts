import {Request, Response} from 'express';
const oracledb = require('oracledb');
import { connectToDB, closeDB } from '../utils/database';



export const login = async (req: Request, res: Response) => {
  const { CORREO, CONTRASENIA } = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(
      `SELECT * FROM C##GITHUB.TBL_USUARIOS 
       WHERE CORREO = :CORREO AND CONTRASENIA = :CONTRASENIA`, 
      { CORREO, CONTRASENIA }
    );

    if (result.rows.length > 0) {
      // Usuario encontrado, credenciales válidas
      res.send({ status: true, message: 'Login correcto', usuario: result.rows[0] });
    } else {
      // Usuario no encontrado o credenciales inválidas
      res.send({ status: false, message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error en la función de login:', error);
    res.status(500).send({ message: 'Error en el servidor al intentar iniciar sesión' });
  }
};


// Función para obtener un usuario por su ID
export const obtenerUsuario = async (req: Request, res: Response) => {
  const { id_usuario } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_USUARIOS WHERE id_usuario = :id_usuario`, [id_usuario]);
    await connection.close();

    if (result.rows.length === 0) {
      res.status(404).send({ message: 'Usuario no encontrado' });
    } else {
      res.send(result.rows[0]);
    }
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    res.status(500).send({ message: 'Error en el servidor al obtener usuario' });
  }
};


// Función para obtener todos los usuarios
export const obtenerUsuarios = async (req: Request, res: Response) => {
  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM C##GITHUB.TBL_USUARIOS ORDER BY ID_USUARIO ASC`);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send({ message: 'Error en el servidor al obtener usuarios' });
  }
};

// Función para agregar un nuevo usuario
export const agregarUsuario = async (req: Request, res: Response) => {
  const {ID_USUARIO, NOMBRE, APELLIDO, CORREO, CONTRASENIA, FECHA_CREACION, UBICACION, BIOGRAFIA} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `INSERT INTO C##GITHUB.TBL_USUARIOS (ID_USUARIO, NOMBRE, APELLIDO, CORREO, CONTRASENIA, FECHA_CREACION, UBICACION, BIOGRAFIA)  
       VALUES (:ID_USUARIO, :NOMBRE, :APELLIDO, :CORREO , :CONTRASENIA, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'), :UBICACION, :BIOGRAFIA)`, 
       [ID_USUARIO, NOMBRE, APELLIDO, CORREO, CONTRASENIA, FECHA_CREACION, UBICACION, BIOGRAFIA]

      );
    await connection.commit();
    await connection.close();

    res.status(201).send({ message: 'Usuario agregado exitosamente' });
  } catch (error) {
    console.error('Error al agregar usuario:', error);
    res.status(500).send({ message: 'Error en el servidor al agregar usuario' });
  }
};

// Función para actualizar un usuario
export const actualizarUsuario = async (req: Request, res: Response) => {
  const { id_usuario } = req.params;
  const {NOMBRE, APELLIDO, CORREO, CONTRASENIA,FECHA_CREACION, UBICACION, BIOGRAFIA} = req.body;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(

      `UPDATE C##GITHUB.TBL_USUARIOS 
       SET 
           NOMBRE = :NOMBRE, 
           APELLIDO = :APELLIDO, 
           CORREO = :CORREO, 
           CONTRASENIA = :CONTRASENIA,
           FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR'),
           UBICACION = :UBICACION,
           BIOGRAFIA = :BIOGRAFIA 
           WHERE ID_USUARIO = :id_usuario`, 
           [NOMBRE, APELLIDO, CORREO, CONTRASENIA, FECHA_CREACION, UBICACION, BIOGRAFIA, id_usuario]
      );
    await connection.commit();
    await connection.close();

    res.send({ message: 'Usuario actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).send({ message: 'Error en el servidor al actualizar usuario' });
  }
};



// Función para eliminar un usuario
export const eliminarUsuario = async (req: Request, res: Response) => {
  const { id_usuario } = req.params;

  let connection;
  try {
    await connectToDB();
    connection = await oracledb.getConnection();
    await connection.execute(`DELETE FROM C##GITHUB.TBL_USUARIOS WHERE id_usuario = :id_usuario`, [id_usuario]);
    await connection.commit();
    await connection.close();

    res.send({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar usuario' });
  }
};