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
exports.eliminarCommit = exports.actualizarCommit = exports.agregarCommit = exports.obtenerCommits = exports.obtenerCommit = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerCommit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_commit } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_COMMITS WHERE id_commit = :id_commit`, [id_commit]);
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
exports.obtenerCommit = obtenerCommit;
// Función para obtener todos los usuarios
const obtenerCommits = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_COMMITS ORDER BY id_commit ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerCommits = obtenerCommits;
// Función para agregar un nuevo usuario
const agregarCommit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_COMMIT, ID_USUARIO, ID_REPOSITORIO, COMMIT_MESSAGE, COMMIT_DATE, CHANGES_COUNT } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_COMMITS 
      (ID_COMMIT, ID_USUARIO, ID_REPOSITORIO, COMMIT_MESSAGE, COMMIT_DATE, CHANGES_COUNT) 
      VALUES 
      (:ID_COMMIT, :ID_USUARIO, :ID_REPOSITORIO, :COMMIT_MESSAGE, TO_DATE(:COMMIT_DATE, 'DD-MON-RR'), :CHANGES_COUNT)
      `, [ID_COMMIT, ID_USUARIO, ID_REPOSITORIO, COMMIT_MESSAGE, COMMIT_DATE, CHANGES_COUNT]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarCommit = agregarCommit;
// Función para actualizar un usuario
const actualizarCommit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_commit } = req.params;
    const { ID_USUARIO, ID_REPOSITORIO, COMMIT_MESSAGE, COMMIT_DATE, CHANGES_COUNT } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_COMMITS 
      SET 
          ID_USUARIO = :ID_USUARIO,
          ID_REPOSITORIO = :ID_REPOSITORIO,
          COMMIT_MESSAGE = :COMMIT_MESSAGE,
          COMMIT_DATE = TO_DATE(:COMMIT_DATE, 'DD-MON-RR'),
          CHANGES_COUNT = :CHANGES_COUNT
      WHERE 
          id_commit = :id_commit
      `, [
            ID_USUARIO,
            ID_REPOSITORIO,
            COMMIT_MESSAGE,
            COMMIT_DATE,
            CHANGES_COUNT,
            id_commit
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
exports.actualizarCommit = actualizarCommit;
// Función para eliminar un usuario
const eliminarCommit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_commit } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_COMMITS WHERE id_commit = :id_commit`, [id_commit]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarCommit = eliminarCommit;
