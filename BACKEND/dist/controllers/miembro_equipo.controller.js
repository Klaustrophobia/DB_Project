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
exports.eliminarMiembro_equipo = exports.actualizarMiembro_equipo = exports.agregarMiembro_equipo = exports.obtenerMiembro_equipos = exports.obtenerMiembro_equipo = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerMiembro_equipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_miembro } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_MIEMBRO_EQUIPO WHERE id_miembro = :id_miembro`, [id_miembro]);
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
exports.obtenerMiembro_equipo = obtenerMiembro_equipo;
// Función para obtener todos los usuarios
const obtenerMiembro_equipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_MIEMBRO_EQUIPO ORDER BY id_miembro ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerMiembro_equipos = obtenerMiembro_equipos;
// Función para agregar un nuevo usuario
const agregarMiembro_equipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_MIEMBRO, ID_EQUIPO, ROL } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_MIEMBRO_EQUIPO 
      (ID_MIEMBRO, ID_EQUIPO, ROL) 
      VALUES 
      (:ID_MIEMBRO, :ID_EQUIPO, :ROL)
      `, [ID_MIEMBRO, ID_EQUIPO, ROL]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarMiembro_equipo = agregarMiembro_equipo;
// Función para actualizar un usuario
const actualizarMiembro_equipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_miembro } = req.params;
    const { ID_EQUIPO, ROL } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_MIEMBRO_EQUIPO 
      SET 
          ID_EQUIPO = :ID_EQUIPO,
          ROL = :ROL
      WHERE 
          id_miembro = :id_miembro
      `, [
            ID_EQUIPO,
            ROL,
            id_miembro
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
exports.actualizarMiembro_equipo = actualizarMiembro_equipo;
// Función para eliminar un usuario
const eliminarMiembro_equipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_miembro } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_MIEMBRO_EQUIPO WHERE id_miembro = :id_miembro`, [id_miembro]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarMiembro_equipo = eliminarMiembro_equipo;
