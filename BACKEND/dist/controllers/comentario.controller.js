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
exports.eliminarComentario = exports.actualizarComentario = exports.agregarComentario = exports.obtenerComentarios = exports.obtenerComentario = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerComentario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_comentario } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_COMENTARIOS WHERE id_comentario = :id_comentario`, [id_comentario]);
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
exports.obtenerComentario = obtenerComentario;
// Función para obtener todos los usuarios
const obtenerComentarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_COMENTARIOS ORDER BY id_comentario ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerComentarios = obtenerComentarios;
// Función para agregar un nuevo usuario
const agregarComentario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_COMENTARIO, ID_USUARIO, FECHA_COMENTARIO, COMENTARIO } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_COMENTARIOS 
      (ID_COMENTARIO, ID_USUARIO, FECHA_COMENTARIO, COMENTARIO) 
      VALUES 
      (:ID_COMENTARIO, :ID_USUARIO, TO_DATE(:FECHA_COMENTARIO, 'DD-MON-RR'), :COMENTARIO)`, [ID_COMENTARIO, ID_USUARIO, FECHA_COMENTARIO, COMENTARIO]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarComentario = agregarComentario;
// Función para actualizar un usuario
const actualizarComentario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_comentario } = req.params;
    const { ID_USUARIO, FECHA_COMENTARIO, COMENTARIO } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_COMENTARIOS 
      SET 
          ID_USUARIO = :ID_USUARIO,
          FECHA_COMENTARIO = TO_DATE(:FECHA_COMENTARIO, 'DD-MON-RR'),
          COMENTARIO = :COMENTARIO
      WHERE 
          id_comentario = :id_comentario`, [
            ID_USUARIO,
            FECHA_COMENTARIO,
            COMENTARIO,
            id_comentario
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
exports.actualizarComentario = actualizarComentario;
// Función para eliminar un usuario
const eliminarComentario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_comentario } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_COMENTARIOS WHERE id_comentario = :id_comentario`, [id_comentario]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarComentario = eliminarComentario;
