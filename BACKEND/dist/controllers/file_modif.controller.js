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
exports.eliminarFile_modif = exports.actualizarFile_modif = exports.agregarFile_modif = exports.obtenerFile_modifs = exports.obtenerFile_modif = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerFile_modif = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_modification } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_FILE_MODIF WHERE id_modification = :id_modification`, [id_modification]);
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
exports.obtenerFile_modif = obtenerFile_modif;
// Función para obtener todos los usuarios
const obtenerFile_modifs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_FILE_MODIF ORDER BY id_modification ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerFile_modifs = obtenerFile_modifs;
// Función para agregar un nuevo usuario
const agregarFile_modif = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_MODIFICATION, ID_COMMIT, FILE_PATH, LINES_ADDED, LINES_DELETED, MODIF_TYPE } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_FILE_MODIF 
      (ID_MODIFICATION, ID_COMMIT, FILE_PATH, LINES_ADDED, LINES_DELETED, MODIF_TYPE) 
      VALUES 
      (:ID_MODIFICATION, :ID_COMMIT, :FILE_PATH, :LINES_ADDED, :LINES_DELETED, :MODIF_TYPE)`, [ID_MODIFICATION, ID_COMMIT, FILE_PATH, LINES_ADDED, LINES_DELETED, MODIF_TYPE]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarFile_modif = agregarFile_modif;
// Función para actualizar un usuario
const actualizarFile_modif = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_modification } = req.params;
    const { ID_COMMIT, FILE_PATH, LINES_ADDED, LINES_DELETED, MODIF_TYPE } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_FILE_MODIF 
      SET 
          ID_COMMIT = :ID_COMMIT,
          FILE_PATH = :FILE_PATH,
          LINES_ADDED = :LINES_ADDED,
          LINES_DELETED = :LINES_DELETED,
          MODIF_TYPE = :MODIF_TYPE
      WHERE 
          id_modification = :id_modification`, [
            ID_COMMIT,
            FILE_PATH,
            LINES_ADDED,
            LINES_DELETED,
            MODIF_TYPE,
            id_modification
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
exports.actualizarFile_modif = actualizarFile_modif;
// Función para eliminar un usuario
const eliminarFile_modif = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_modification } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_FILE_MODIF WHERE id_modification = :id_modification`, [id_modification]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarFile_modif = eliminarFile_modif;
