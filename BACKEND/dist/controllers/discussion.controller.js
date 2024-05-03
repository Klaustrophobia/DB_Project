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
exports.eliminarDiscussion = exports.actualizarDiscussion = exports.agregarDiscussion = exports.obtenerDiscussions = exports.obtenerDiscussion = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerDiscussion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_discusion } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_DISCUSSION WHERE id_discusion = :id_discusion`, [id_discusion]);
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
exports.obtenerDiscussion = obtenerDiscussion;
// Función para obtener todos los usuarios
const obtenerDiscussions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_DISCUSSION ORDER BY id_discusion ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerDiscussions = obtenerDiscussions;
// Función para agregar un nuevo usuario
const agregarDiscussion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_DISCUSION, ID_USUARIO, ID_REPOSITORIO, TITULO, CONTENIDO, FECHA_CREACION } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_DISCUSSION 
      (ID_DISCUSION, ID_USUARIO, ID_REPOSITORIO, TITULO, CONTENIDO, FECHA_CREACION) 
      VALUES 
      (:ID_DISCUSION, :ID_USUARIO, :ID_REPOSITORIO, :TITULO, :CONTENIDO, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'))`, [ID_DISCUSION, ID_USUARIO, ID_REPOSITORIO, TITULO, CONTENIDO, FECHA_CREACION]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarDiscussion = agregarDiscussion;
// Función para actualizar un usuario
const actualizarDiscussion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_discusion } = req.params;
    const { ID_USUARIO, ID_REPOSITORIO, TITULO, CONTENIDO, FECHA_CREACION } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_DISCUSSION 
      SET 
          ID_USUARIO = :ID_USUARIO,
          ID_REPOSITORIO = :ID_REPOSITORIO,
          TITULO = :TITULO,
          CONTENIDO = :CONTENIDO,
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR')
      WHERE 
          id_discusion = :id_discusion`, [
            ID_USUARIO,
            ID_REPOSITORIO,
            TITULO,
            CONTENIDO,
            FECHA_CREACION,
            id_discusion
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
exports.actualizarDiscussion = actualizarDiscussion;
// Función para eliminar un usuario
const eliminarDiscussion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_discusion } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_DISCUSSION WHERE id_discusion = :id_discusion`, [id_discusion]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarDiscussion = eliminarDiscussion;
