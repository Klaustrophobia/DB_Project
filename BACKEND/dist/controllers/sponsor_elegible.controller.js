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
exports.eliminarSponsor_elegible = exports.actualizarSponsor_elegible = exports.agregarSponsor_elegible = exports.obtenerSponsor_elegibles = exports.obtenerSponsor_elegible = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerSponsor_elegible = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_sponsor_elegible } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_SPONSOR_ELEGIBLE WHERE id_sponsor_elegible = :id_sponsor_elegible`, [id_sponsor_elegible]);
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
exports.obtenerSponsor_elegible = obtenerSponsor_elegible;
// Función para obtener todos los usuarios
const obtenerSponsor_elegibles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_SPONSOR_ELEGIBLE ORDER BY id_sponsor_elegible ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerSponsor_elegibles = obtenerSponsor_elegibles;
// Función para agregar un nuevo usuario
const agregarSponsor_elegible = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_SPONSOR_ELEGIBLE, DESCRIPCION } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_SPONSOR_ELEGIBLE 
      (ID_SPONSOR_ELEGIBLE, DESCRIPCION) 
      VALUES 
      (:ID_SPONSOR_ELEGIBLE, :DESCRIPCION);`, [ID_SPONSOR_ELEGIBLE, DESCRIPCION]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarSponsor_elegible = agregarSponsor_elegible;
// Función para actualizar un usuario
const actualizarSponsor_elegible = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_sponsor_elegible } = req.params;
    const { DESCRIPCION } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_SPONSOR_ELEGIBLE 
      SET 
          DESCRIPCION = :DESCRIPCION
      WHERE 
          id_sponsor_elegible = :id_sponsor_elegible`, [
            DESCRIPCION,
            id_sponsor_elegible
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
exports.actualizarSponsor_elegible = actualizarSponsor_elegible;
// Función para eliminar un usuario
const eliminarSponsor_elegible = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_sponsor_elegible } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_SPONSOR_ELEGIBLE WHERE id_sponsor_elegible = :id_sponsor_elegible`, [id_sponsor_elegible]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarSponsor_elegible = eliminarSponsor_elegible;
