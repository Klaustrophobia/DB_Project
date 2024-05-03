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
exports.eliminarEquipo = exports.actualizarEquipo = exports.agregarEquipo = exports.obtenerEquipos = exports.obtenerEquipo = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_equipo } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_EQUIPO WHERE id_equipo = :id_equipo`, [id_equipo]);
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
exports.obtenerEquipo = obtenerEquipo;
// Función para obtener todos los usuarios
const obtenerEquipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_EQUIPO ORDER BY id_equipo ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerEquipos = obtenerEquipos;
// Función para agregar un nuevo usuario
const agregarEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_EQUIPO, ID_ORGANIZACION, NOMBRE_EQUIPO, DESCRIPTION, FECHA_CREACION } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_EQUIPO 
      (ID_EQUIPO, ID_ORGANIZACION, NOMBRE_EQUIPO, DESCRIPTION, FECHA_CREACION) 
      VALUES 
      (:ID_EQUIPO, :ID_ORGANIZACION, :NOMBRE_EQUIPO, :DESCRIPTION, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'))
      `, [ID_EQUIPO, ID_ORGANIZACION, NOMBRE_EQUIPO, DESCRIPTION, FECHA_CREACION]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarEquipo = agregarEquipo;
// Función para actualizar un usuario
const actualizarEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_equipo } = req.params;
    const { ID_ORGANIZACION, NOMBRE_EQUIPO, DESCRIPTION, FECHA_CREACION } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_EQUIPO 
      SET 
          ID_ORGANIZACION = :ID_ORGANIZACION,
          NOMBRE_EQUIPO = :NOMBRE_EQUIPO,
          DESCRIPTION = :DESCRIPTION,
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR')
      WHERE 
          id_equipo = :id_equipo;
      `, [
            ID_ORGANIZACION,
            NOMBRE_EQUIPO,
            DESCRIPTION,
            FECHA_CREACION,
            id_equipo
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
exports.actualizarEquipo = actualizarEquipo;
// Función para eliminar un usuario
const eliminarEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_equipo } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_EQUIPO WHERE id_equipo = :id_equipo`, [id_equipo]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarEquipo = eliminarEquipo;
