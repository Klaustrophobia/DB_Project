"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarUsuario = exports.actualizarUsuario = exports.agregarUsuario = exports.obtenerUsuarios = exports.obtenerUsuario = exports.login = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CORREO, CONTRASENIA } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_USUARIOS 
       WHERE CORREO = :CORREO AND CONTRASENIA = :CONTRASENIA`, { CORREO, CONTRASENIA });
        if (result.rows.length > 0) {
            // Usuario encontrado, credenciales válidas
            res.send({ status: true, message: 'Login correcto', usuario: result.rows[0] });
        }
        else {
            // Usuario no encontrado o credenciales inválidas
            res.send({ status: false, message: 'Credenciales incorrectas' });
        }
    }
    catch (error) {
        console.error('Error en la función de login:', error);
        res.status(500).send({ message: 'Error en el servidor al intentar iniciar sesión' });
    }
});
exports.login = login;
// Función para obtener un usuario por su ID
const obtenerUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_usuario } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_USUARIOS WHERE id_usuario = :id_usuario`, [id_usuario]);
        yield connection.close();
        if (result.rows.length === 0) {
            res.status(404).send({ message: 'Usuario no encontrado' });
        }
        else {
            res.send(result.rows[0]);
        }
    }
    catch (error) {
        console.error('Error al obtener usuario:', error);
        res.status(500).send({ message: 'Error en el servidor al obtener usuario' });
    }
});
exports.obtenerUsuario = obtenerUsuario;
// Función para obtener todos los usuarios
const obtenerUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_USUARIOS ORDER BY ID_USUARIO ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).send({ message: 'Error en el servidor al obtener usuarios' });
    }
});
exports.obtenerUsuarios = obtenerUsuarios;
// Función para agregar un nuevo usuario
const agregarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_USUARIO, NOMBRE, APELLIDO, CORREO, CONTRASENIA, FECHA_CREACION, UBICACION, BIOGRAFIA } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_USUARIOS (ID_USUARIO, NOMBRE, APELLIDO, CORREO, CONTRASENIA, FECHA_CREACION, UBICACION, BIOGRAFIA)  
       VALUES (:ID_USUARIO, :NOMBRE, :APELLIDO, :CORREO , :CONTRASENIA, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'), :UBICACION, :BIOGRAFIA)`, [ID_USUARIO, NOMBRE, APELLIDO, CORREO, CONTRASENIA, FECHA_CREACION, UBICACION, BIOGRAFIA]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: 'Usuario agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar usuario:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar usuario' });
    }
});
exports.agregarUsuario = agregarUsuario;
// Función para actualizar un usuario
const actualizarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_usuario } = req.params;
    const { NOMBRE, APELLIDO, CORREO, CONTRASENIA, FECHA_CREACION, UBICACION, BIOGRAFIA } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_USUARIOS 
       SET 
           NOMBRE = :NOMBRE, 
           APELLIDO = :APELLIDO, 
           CORREO = :CORREO, 
           CONTRASENIA = :CONTRASENIA,
           FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR'),
           UBICACION = :UBICACION,
           BIOGRAFIA = :BIOGRAFIA 
           WHERE ID_USUARIO = :id_usuario`, [NOMBRE, APELLIDO, CORREO, CONTRASENIA, FECHA_CREACION, UBICACION, BIOGRAFIA, id_usuario]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'Usuario actualizado exitosamente' });
    }
    catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).send({ message: 'Error en el servidor al actualizar usuario' });
    }
});
exports.actualizarUsuario = actualizarUsuario;
// Función para eliminar un usuario
const eliminarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_usuario } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_USUARIOS WHERE id_usuario = :id_usuario`, [id_usuario]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'Usuario eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar usuario' });
    }
});
exports.eliminarUsuario = eliminarUsuario;
