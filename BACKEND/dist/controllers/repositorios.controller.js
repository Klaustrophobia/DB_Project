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
exports.eliminarRepositorio = exports.actualizarRepositorio = exports.agregarRepositorio = exports.obtenerRepositorios = exports.obtenerRepositorio = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerRepositorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_repositorio } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_REPOSITORIO WHERE id_repositorio = :id_repositorio`, [id_repositorio]);
        yield connection.close();
        if (result.rows.length === 0) {
            res.status(404).send({ message: 'repositorio no encontrado' });
        }
        else {
            res.send(result.rows[0]);
        }
    }
    catch (error) {
        console.error('Error al obtener repositorio:', error);
        res.status(500).send({ message: 'Error en el servidor al obtener repositorio' });
    }
});
exports.obtenerRepositorio = obtenerRepositorio;
// Función para obtener todos los usuarios
const obtenerRepositorios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_REPOSITORIO ORDER BY ID_USUARIO ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerRepositorios = obtenerRepositorios;
// Función para agregar un nuevo usuario
const agregarRepositorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_REPOSITORIO, ID_USUARIO, NOMBRE_REPOSITORIO, DESCRIPCION, FECHA_CREACION_REPOSITORIO, FECHA_ULTIMA_ACTUALIZACION, NUMERO_ESTRELLAS, NUMERO_FORKS, LENGUAJE_PRINCIPAL, CANTIDAD_PULLS, CANTIDAD_ISSUES } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`Insert into C##GITHUB.TBL_REPOSITORIO 
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
              :CANTIDAD_ISSUES)`, [ID_REPOSITORIO, ID_USUARIO, NOMBRE_REPOSITORIO, DESCRIPCION, FECHA_CREACION_REPOSITORIO, FECHA_ULTIMA_ACTUALIZACION, NUMERO_ESTRELLAS, NUMERO_FORKS, LENGUAJE_PRINCIPAL, CANTIDAD_PULLS, CANTIDAD_ISSUES]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' repositorio agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarRepositorio = agregarRepositorio;
// Función para actualizar un usuario
const actualizarRepositorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_repositorio } = req.params;
    const { ID_USUARIO, NOMBRE_REPOSITORIO, DESCRIPCION, FECHA_CREACION_REPOSITORIO, FECHA_ULTIMA_ACTUALIZACION, NUMERO_ESTRELLAS, NUMERO_FORKS, LENGUAJE_PRINCIPAL, CANTIDAD_PULLS, CANTIDAD_ISSUES } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_REPOSITORIO 
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
          id_repositorio = :id_repositorio`, [ID_USUARIO,
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
        ]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: ' actualizado exitosamente' });
    }
    catch (error) {
        console.error('Error al actualizar :', error);
        res.status(500).send({ message: 'Error en el servidor al actualizar' });
    }
});
exports.actualizarRepositorio = actualizarRepositorio;
// Función para eliminar un usuario
const eliminarRepositorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_repositorio } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_USUARIOS WHERE id_repositorio = :id_repositorio`, [id_repositorio]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar usuario' });
    }
});
exports.eliminarRepositorio = eliminarRepositorio;
