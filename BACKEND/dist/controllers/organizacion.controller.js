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
exports.eliminarOrganizacion = exports.actualizarOrganizacion = exports.agregarOrganizacion = exports.obtenerOrganizaciones = exports.obtenerOrganizacion = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerOrganizacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_organizacion } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_ORGANIZACION WHERE id_organizacion = :id_organizacion`, [id_organizacion]);
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
exports.obtenerOrganizacion = obtenerOrganizacion;
// Función para obtener todos los usuarios
const obtenerOrganizaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_ORGANIZACION ORDER BY id_organizacion ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerOrganizaciones = obtenerOrganizaciones;
// Función para agregar un nuevo usuario
const agregarOrganizacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_ORGANIZACION, ID_USUARIO, NOMBRE, DESCRIPCION, FECHA_CREACION, LOCACION, WEBSITE, NUMERO_MIEMBROS } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_ORGANIZACION 
      (ID_ORGANIZACION, ID_USUARIO, NOMBRE, DESCRIPCION, FECHA_CREACION, LOCACION, WEBSITE, NUMERO_MIEMBROS) 
      VALUES 
      (:ID_ORGANIZACION, :ID_USUARIO, :NOMBRE, :DESCRIPCION, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'), :LOCACION, :WEBSITE, :NUMERO_MIEMBROS)`, [ID_ORGANIZACION, ID_USUARIO, NOMBRE, DESCRIPCION, FECHA_CREACION, LOCACION, WEBSITE, NUMERO_MIEMBROS]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarOrganizacion = agregarOrganizacion;
// Función para actualizar un usuario
const actualizarOrganizacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_organizacion } = req.params;
    const { ID_USUARIO, NOMBRE, DESCRIPCION, FECHA_CREACION, LOCACION, WEBSITE, NUMERO_MIEMBROS } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_ORGANIZACION 
      SET 
          ID_USUARIO = :ID_USUARIO,
          NOMBRE = :NOMBRE,
          DESCRIPCION = :DESCRIPCION,
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR'),
          LOCACION = :LOCACION,
          WEBSITE = :WEBSITE,
          NUMERO_MIEMBROS = :NUMERO_MIEMBROS
      WHERE 
          id_organizacion = :id_organizacion;
      `, [
            ID_USUARIO,
            NOMBRE,
            DESCRIPCION,
            FECHA_CREACION,
            LOCACION,
            WEBSITE,
            NUMERO_MIEMBROS,
            id_organizacion
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
exports.actualizarOrganizacion = actualizarOrganizacion;
// Función para eliminar un usuario
const eliminarOrganizacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_organizacion } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_ORGANIZACION WHERE id_organizacion = :id_organizacion`, [id_organizacion]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarOrganizacion = eliminarOrganizacion;
