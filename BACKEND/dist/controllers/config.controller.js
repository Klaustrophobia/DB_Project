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
exports.eliminarConfig = exports.actualizarConfig = exports.agregarConfig = exports.obtenerConfigs = exports.obtenerConfig = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerConfig = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_configuracion } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_CONFIG_ACCESO_REPOSITORIO WHERE id_configuracion = :id_configuracion`, [id_configuracion]);
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
exports.obtenerConfig = obtenerConfig;
// Función para obtener todos los usuarios
const obtenerConfigs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_CONFIG_ACCESO_REPOSITORIO ORDER BY id_configuracion ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerConfigs = obtenerConfigs;
// Función para agregar un nuevo usuario
const agregarConfig = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_CONFIGURACION, ID_REPOSITORIO, TIPO_ACCESO, FECHA_CREACION } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_CONFIG_ACCESO_REPOSITORIO 
      (ID_CONFIGURACION, ID_REPOSITORIO, TIPO_ACCESO, FECHA_CREACION) 
      VALUES 
      (:ID_CONFIGURACION, :ID_REPOSITORIO, :TIPO_ACCESO, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'))`, [ID_CONFIGURACION, ID_REPOSITORIO, TIPO_ACCESO, FECHA_CREACION]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarConfig = agregarConfig;
// Función para actualizar un usuario
const actualizarConfig = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_configuracion } = req.params;
    const { ID_REPOSITORIO, TIPO_ACCESO, FECHA_CREACION } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_CONFIG_ACCESO_REPOSITORIO 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          TIPO_ACCESO = :TIPO_ACCESO,
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR')
      WHERE 
          id_configuracion = :id_configuracion
      `, [
            ID_REPOSITORIO,
            TIPO_ACCESO,
            FECHA_CREACION,
            id_configuracion
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
exports.actualizarConfig = actualizarConfig;
// Función para eliminar un usuario
const eliminarConfig = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_configuracion } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_CONFIG_ACCESO_REPOSITORIO WHERE id_configuracion = :id_configuracion`, [id_configuracion]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarConfig = eliminarConfig;
