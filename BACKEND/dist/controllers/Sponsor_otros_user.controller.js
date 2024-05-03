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
exports.eliminarSponsor_otros_user = exports.actualizarSponsor_otros_user = exports.agregarSponsor_otros_user = exports.obtenerSponsor_otros_users = exports.obtenerSponsor_otros_user = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerSponsor_otros_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_sponsor_otros } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_SPONSOR_OTROS_USERS WHERE id_sponsor_otros = :id_sponsor_otros`, [id_sponsor_otros]);
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
exports.obtenerSponsor_otros_user = obtenerSponsor_otros_user;
// Función para obtener todos los usuarios
const obtenerSponsor_otros_users = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_SPONSOR_OTROS_USERS ORDER BY id_sponsor_otros ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerSponsor_otros_users = obtenerSponsor_otros_users;
// Función para agregar un nuevo usuario
const agregarSponsor_otros_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_SPONSOR_OTROS, ID_PROYECTO, LISTA_SPONSOR } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_SPONSOR_OTROS_USERS
      (ID_SPONSOR_OTROS, ID_PROYECTO, LISTA_SPONSOR) 
      VALUES 
      (:ID_SPONSOR_OTROS, :ID_PROYECTO, :LISTA_SPONSOR)
      `, [ID_SPONSOR_OTROS, ID_PROYECTO, LISTA_SPONSOR]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarSponsor_otros_user = agregarSponsor_otros_user;
// Función para actualizar un usuario
const actualizarSponsor_otros_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_sponsor_otros } = req.params;
    const { ID_PROYECTO, LISTA_SPONSOR } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_SPONSOR_OTROS_USERS 
      SET 
          ID_PROYECTO = :ID_PROYECTO,
          LISTA_SPONSOR = :LISTA_SPONSOR
      WHERE 
          id_sponsor_otros = :id_sponsor_otros`, [
            ID_PROYECTO,
            LISTA_SPONSOR,
            id_sponsor_otros
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
exports.actualizarSponsor_otros_user = actualizarSponsor_otros_user;
// Función para eliminar un usuario
const eliminarSponsor_otros_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_sponsor_otros } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_SPONSOR_OTROS_USERS WHERE id_sponsor_otros = :id_sponsor_otros`, [id_sponsor_otros]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarSponsor_otros_user = eliminarSponsor_otros_user;
