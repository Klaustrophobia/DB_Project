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
exports.eliminarFile = exports.actualizarFile = exports.agregarFile = exports.obtenerFiles = exports.obtenerFile = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_file } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_FILE WHERE id_file = :id_file`, [id_file]);
        yield connection.close();
        if (result.rows.length === 0) {
            res.status(404).send({ message: ' no encontrado' });
        }
        else {
            res.send(result.rows[0]);
        }
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor' });
    }
});
exports.obtenerFile = obtenerFile;
// Función para obtener todos los usuarios
const obtenerFiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_FILE ORDER BY id_file ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerFiles = obtenerFiles;
// Función para agregar un nuevo usuario
const agregarFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_FILE, ID_REPOSITORIO, NOMBRE_ARCHIVO, EXTENSION, TAMANIO, DATE_LAST_MODIF } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_FILE 
      (ID_FILE, ID_REPOSITORIO, NOMBRE_ARCHIVO, EXTENSION, TAMANIO, DATE_LAST_MODIF) 
      VALUES 
      (:ID_FILE, :ID_REPOSITORIO, :NOMBRE_ARCHIVO, :EXTENSION, :TAMANIO, TO_DATE(:DATE_LAST_MODIF, 'DD-MON-RR'))
      `, [ID_FILE, ID_REPOSITORIO, NOMBRE_ARCHIVO, EXTENSION, TAMANIO, DATE_LAST_MODIF]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarFile = agregarFile;
// Función para actualizar un usuario
const actualizarFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_file } = req.params;
    const { ID_REPOSITORIO, NOMBRE_ARCHIVO, EXTENSION, TAMANIO, DATE_LAST_MODIF } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_FILE 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          NOMBRE_ARCHIVO = :NOMBRE_ARCHIVO,
          EXTENSION = :EXTENSION,
          TAMANIO = :TAMANIO,
          DATE_LAST_MODIF = TO_DATE(:DATE_LAST_MODIF, 'DD-MON-RR')
      WHERE 
          id_file = :id_file`, [
            ID_REPOSITORIO,
            NOMBRE_ARCHIVO,
            EXTENSION,
            TAMANIO,
            DATE_LAST_MODIF,
            id_file
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
exports.actualizarFile = actualizarFile;
// Función para eliminar un usuario
const eliminarFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_file } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_FILE WHERE id_file = :id_file`, [id_file]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarFile = eliminarFile;
