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
exports.eliminarSponsor_propio = exports.actualizarSponsor_propio = exports.agregarSponsor_propio = exports.obtenerSponsor_propios = exports.obtenerSponsor_propio = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerSponsor_propio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_sponsor_propio } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_SPONSOR_PROPIO WHERE id_sponsor_propio = :id_sponsor_propio`, [id_sponsor_propio]);
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
exports.obtenerSponsor_propio = obtenerSponsor_propio;
// Función para obtener todos los usuarios
const obtenerSponsor_propios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_SPONSOR_PROPIO ORDER BY id_sponsor_propio ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerSponsor_propios = obtenerSponsor_propios;
// Función para agregar un nuevo usuario
const agregarSponsor_propio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_SPONSOR_PROPIO, ID_SPONSOR_ELEGIBLE, ID_USUARIO } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_SPONSOR_PROPIO 
      (ID_SPONSOR_PROPIO, ID_SPONSOR_ELEGIBLE, ID_USUARIO) 
      VALUES 
      (:ID_SPONSOR_PROPIO, :ID_SPONSOR_ELEGIBLE, :ID_USUARIO)
      
      `, [ID_SPONSOR_PROPIO, ID_SPONSOR_ELEGIBLE, ID_USUARIO]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarSponsor_propio = agregarSponsor_propio;
// Función para actualizar un usuario
const actualizarSponsor_propio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_sponsor_propio } = req.params;
    const { ID_SPONSOR_ELEGIBLE, ID_USUARIO } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_SPONSOR_PROPIO 
      SET 
          ID_SPONSOR_ELEGIBLE = :ID_SPONSOR_ELEGIBLE,
          ID_USUARIO = :ID_USUARIO
      WHERE 
          id_sponsor_propio = :id_sponsor_propio`, [
            ID_SPONSOR_ELEGIBLE,
            ID_USUARIO,
            id_sponsor_propio
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
exports.actualizarSponsor_propio = actualizarSponsor_propio;
// Función para eliminar un usuario
const eliminarSponsor_propio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_sponsor_propio } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_SPONSOR_PROPIO WHERE id_sponsor_propio = :id_sponsor_propio`, [id_sponsor_propio]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarSponsor_propio = eliminarSponsor_propio;
