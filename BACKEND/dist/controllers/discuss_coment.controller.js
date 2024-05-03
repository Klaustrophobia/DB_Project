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
exports.eliminarDiscuss_coment = exports.actualizarDiscuss_coment = exports.agregarDiscuss_coment = exports.obtenerDiscuss_coments = exports.obtenerDiscuss_coment = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerDiscuss_coment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_comentario } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_DISCUSS_COMMENT WHERE id_comentario = :id_comentario`, [id_comentario]);
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
exports.obtenerDiscuss_coment = obtenerDiscuss_coment;
// Función para obtener todos los usuarios
const obtenerDiscuss_coments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_DISCUSS_COMMENT ORDER BY id_comentario ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerDiscuss_coments = obtenerDiscuss_coments;
// Función para agregar un nuevo usuario
const agregarDiscuss_coment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_COMENTARIO, ID_USUARIO, ID_DISCUSION, CONTENIDO, FECHA_CREACION } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_DISCUSS_COMMENT 
      (ID_COMENTARIO, ID_USUARIO, ID_DISCUSION, CONTENIDO, FECHA_CREACION) 
      VALUES 
      (:ID_COMENTARIO, :ID_USUARIO, :ID_DISCUSION, :CONTENIDO, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'))`, [ID_COMENTARIO, ID_USUARIO, ID_DISCUSION, CONTENIDO, FECHA_CREACION]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarDiscuss_coment = agregarDiscuss_coment;
// Función para actualizar un usuario
const actualizarDiscuss_coment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_comentario } = req.params;
    const { ID_USUARIO, ID_DISCUSION, CONTENIDO, FECHA_CREACION } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_DISCUSS_COMMENT 
      SET 
          ID_USUARIO = :ID_USUARIO,
          ID_DISCUSION = :ID_DISCUSION,
          CONTENIDO = :CONTENIDO,
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR')
      WHERE 
          id_comentario = :id_comentario`, [
            ID_USUARIO,
            ID_DISCUSION,
            CONTENIDO,
            FECHA_CREACION,
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
exports.actualizarDiscuss_coment = actualizarDiscuss_coment;
// Función para eliminar un usuario
const eliminarDiscuss_coment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_comentario } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_DISCUSS_COMMENT WHERE id_comentario = :id_comentario`, [id_comentario]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarDiscuss_coment = eliminarDiscuss_coment;
