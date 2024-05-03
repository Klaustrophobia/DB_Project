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
exports.eliminarSeguidor = exports.actualizarSeguidor = exports.agregarSeguidor = exports.obtenerSeguidores = exports.obtenerSeguidor = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerSeguidor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_seguidor } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_SEGUIDORES WHERE id_seguidor = :id_seguidor`, [id_seguidor]);
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
exports.obtenerSeguidor = obtenerSeguidor;
// Función para obtener todos los usuarios
const obtenerSeguidores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_SEGUIDORES ORDER BY id_seguidor ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerSeguidores = obtenerSeguidores;
// Función para agregar un nuevo usuario
const agregarSeguidor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_SEGUIDOR, ID_USUARIO, FECHA_SEGUIDO, VISIBILIDAD } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_SEGUIDORES 
      (ID_SEGUIDOR, ID_USUARIO, FECHA_SEGUIDO, VISIBILIDAD) 
      VALUES 
      (:ID_SEGUIDOR, :ID_USUARIO, TO_DATE(:FECHA_SEGUIDO, 'DD-MON-RR'), :VISIBILIDAD)
      `, [ID_SEGUIDOR, ID_USUARIO, FECHA_SEGUIDO, VISIBILIDAD]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarSeguidor = agregarSeguidor;
// Función para actualizar un usuario
const actualizarSeguidor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_seguidor } = req.params;
    const { ID_USUARIO, FECHA_SEGUIDO, VISIBILIDAD } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_SEGUIDORES 
      SET 
          ID_USUARIO = :ID_USUARIO
          FECHA_SEGUIDO = TO_DATE(:FECHA_SEGUIDO, 'DD-MON-RR'),
          VISIBILIDAD = :VISIBILIDAD
      WHERE 
          id_seguidor = :id_seguidor
      `, [
            ID_USUARIO,
            FECHA_SEGUIDO,
            VISIBILIDAD,
            id_seguidor
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
exports.actualizarSeguidor = actualizarSeguidor;
// Función para eliminar un usuario
const eliminarSeguidor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_seguidor } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_SEGUIDORES WHERE id_seguidor = :id_seguidor`, [id_seguidor]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarSeguidor = eliminarSeguidor;
