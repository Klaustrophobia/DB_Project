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
exports.eliminarPull_request = exports.actualizarPull_request = exports.agregarPull_request = exports.obtenerPull_requests = exports.obtenerPull_request = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerPull_request = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_pull_request } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_PULL_REQUEST WHERE id_pull_request = :id_pull_request`, [id_pull_request]);
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
exports.obtenerPull_request = obtenerPull_request;
// Función para obtener todos los usuarios
const obtenerPull_requests = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_PULL_REQUEST ORDER BY id_pull_request ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerPull_requests = obtenerPull_requests;
// Función para agregar un nuevo usuario
const agregarPull_request = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_PULL_REQUEST, ID_REPOSITORIO, TITULO, DESCRIPTION, ESTADO, FECHA_CREACION, FECHA_CIERRE, FECHA_MERGE, RAMA_BASE, NUMERO_COMMITS, REVIEW_STATUS } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_PULL_REQUEST 
      (ID_PULL_REQUEST, ID_REPOSITORIO, TITULO, DESCRIPTION, ESTADO, FECHA_CREACION, FECHA_CIERRE, FECHA_MERGE, RAMA_BASE, NUMERO_COMMITS, REVIEW_STATUS) 
      VALUES 
      (:ID_PULL_REQUEST, :ID_REPOSITORIO, :TITULO, :DESCRIPTION, :ESTADO, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'), TO_DATE(:FECHA_CIERRE, 'DD-MON-RR'), TO_DATE(:FECHA_MERGE, 'DD-MON-RR'), :RAMA_BASE, :NUMERO_COMMITS, :REVIEW_STATUS)
      `, [ID_PULL_REQUEST, ID_REPOSITORIO, TITULO, DESCRIPTION, ESTADO, FECHA_CREACION, FECHA_CIERRE, FECHA_MERGE, RAMA_BASE, NUMERO_COMMITS, REVIEW_STATUS]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarPull_request = agregarPull_request;
// Función para actualizar un usuario
const actualizarPull_request = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_pull_request } = req.params;
    const { ID_REPOSITORIO, TITULO, DESCRIPTION, ESTADO, FECHA_CREACION, FECHA_CIERRE, FECHA_MERGE, RAMA_BASE, NUMERO_COMMITS, REVIEW_STATUS } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_PULL_REQUEST 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          TITULO = :TITULO,
          DESCRIPTION = :DESCRIPTION,
          ESTADO = :ESTADO,
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR'),
          FECHA_CIERRE = TO_DATE(:FECHA_CIERRE, 'DD-MON-RR'),
          FECHA_MERGE = TO_DATE(:FECHA_MERGE, 'DD-MON-RR'),
          RAMA_BASE = :RAMA_BASE,
          NUMERO_COMMITS = :NUMERO_COMMITS,
          REVIEW_STATUS = :REVIEW_STATUS
      WHERE 
          id_pull_request = :id_pull_request`, [
            ID_REPOSITORIO,
            TITULO,
            DESCRIPTION,
            ESTADO,
            FECHA_CREACION,
            FECHA_CIERRE,
            FECHA_MERGE,
            RAMA_BASE,
            NUMERO_COMMITS,
            REVIEW_STATUS,
            id_pull_request
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
exports.actualizarPull_request = actualizarPull_request;
// Función para eliminar un usuario
const eliminarPull_request = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_pull_request } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_PULL_REQUEST WHERE id_pull_request = :id_pull_request`, [id_pull_request]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarPull_request = eliminarPull_request;
