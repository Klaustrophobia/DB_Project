"use strict";
/*import { Request, Response } from 'express';
import oracledb from './utils/database'; // Importa el objeto oracledb de tu archivo de configuración de base de datos

// Función para crear un nuevo usuario
export const crearUsuario = async (req: Request, res: Response) => {
  const { nombre, apellido, correo, contrasena } = req.body;

  const query = `INSERT INTO TBL_USUARIOS (nombre, apellido, correo, contrasena)
                 VALUES (:nombre, :apellido, :correo, :contrasena)`;
  const binds = { nombre, apellido, correo, contrasena };

  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute(query, binds, { autoCommit: true });
    await connection.close();

    res.status(201).send({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).send({ message: 'Error en el servidor al crear usuario' });
  }
};

// Función para obtener todos los usuarios
export const obtenerUsuarios = async (req: Request, res: Response) => {
  const query = `SELECT * FROM TBL_USUARIOS`;

  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute(query);
    await connection.close();

    res.send(result.rows);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send({ message: 'Error en el servidor al obtener usuarios' });
  }
};

// Función para obtener un usuario por su ID
export const obtenerUsuarioPorId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT * FROM TBL_USUARIOS WHERE id = :id`;
  const binds = { id };

  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute(query, binds);
    await connection.close();

    if (result.rows.length === 0) {
      res.status(404).send({ message: 'Usuario no encontrado' });
    } else {
      res.send(result.rows[0]);
    }
  } catch (error) {
    console.error('Error al obtener usuario por ID:', error);
    res.status(500).send({ message: 'Error en el servidor al obtener usuario por ID' });
  }
};

// Función para actualizar un usuario
export const actualizarUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, apellido, correo, contrasena } = req.body;

  const query = `UPDATE TBL_USUARIOS SET nombre = :nombre, apellido = :apellido, correo = :correo, contrasena = :contrasena
                 WHERE id = :id`;
  const binds = { id, nombre, apellido, correo, contrasena };

  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute(query, binds, { autoCommit: true });
    await connection.close();

    if (result.rowsAffected === 0) {
      res.status(404).send({ message: 'Usuario no encontrado' });
    } else {
      res.send({ message: 'Usuario actualizado exitosamente' });
    }
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).send({ message: 'Error en el servidor al actualizar usuario' });
  }
};

// Función para eliminar un usuario
export const eliminarUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `DELETE FROM TBL_USUARIOS WHERE id = :id`;
  const binds = { id };

  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute(query, binds, { autoCommit: true });
    await connection.close();

    if (result.rowsAffected === 0) {
      res.status(404).send({ message: 'Usuario no encontrado' });
    } else {
      res.send({ message: 'Usuario eliminado exitosamente' });
    }
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).send({ message: 'Error en el servidor al eliminar usuario' });
  }
};
*/ 
