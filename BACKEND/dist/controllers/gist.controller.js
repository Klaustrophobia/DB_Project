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
exports.eliminarGist = exports.actualizarGist = exports.agregarGist = exports.obtenerGists = exports.obtenerGist = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerGist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_gist } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_GIST WHERE id_gist = :id_gist`, [id_gist]);
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
exports.obtenerGist = obtenerGist;
// Función para obtener todos los usuarios
const obtenerGists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_GIST ORDER BY id_gist ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerGists = obtenerGists;
// Función para agregar un nuevo usuario
const agregarGist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_GIST, ID_USUARIO, DESCRIPTION_GIST, FECHA_CREATION } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_GIST 
      (ID_GIST, ID_USUARIO, DESCRIPTION_GIST, FECHA_CREATION) 
      VALUES 
      (:ID_GIST, :ID_USUARIO, :DESCRIPTION_GIST, TO_DATE(:FECHA_CREATION, 'DD-MON-RR'))`, [ID_GIST, ID_USUARIO, DESCRIPTION_GIST, FECHA_CREATION]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarGist = agregarGist;
// Función para actualizar un usuario
const actualizarGist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_gist } = req.params;
    const { ID_USUARIO, DESCRIPTION_GIST, FECHA_CREATION } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_GIST 
      SET 
          ID_USUARIO = :ID_USUARIO,
          DESCRIPTION_GIST = :DESCRIPTION_GIST,
          FECHA_CREATION = TO_DATE(:FECHA_CREATION, 'DD-MON-RR')
      WHERE 
          id_gist = :id_gist
      `, [
            ID_USUARIO,
            DESCRIPTION_GIST,
            FECHA_CREATION,
            id_gist
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
exports.actualizarGist = actualizarGist;
// Función para eliminar un usuario
const eliminarGist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_gist } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_GIST WHERE id_gist = :id_gist`, [id_gist]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarGist = eliminarGist;
