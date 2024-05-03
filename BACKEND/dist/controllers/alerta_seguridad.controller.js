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
exports.eliminarAlerta = exports.actualizarAlerta = exports.agregarAlerta = exports.obtenerAlertas = exports.obtenerAlerta = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerAlerta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_alerta } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_ALERTA_SEGURIDAD WHERE id_alerta = :id_alerta`, [id_alerta]);
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
exports.obtenerAlerta = obtenerAlerta;
// Función para obtener todos los usuarios
const obtenerAlertas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_ALERTA_SEGURIDAD ORDER BY id_alerta ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerAlertas = obtenerAlertas;
// Función para agregar un nuevo usuario
const agregarAlerta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_ALERTA, ID_REPOSITORIO, DESCRIPCION, GRAVEDAD, FECHA_CREACION } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_ALERTA_SEGURIDAD 
      (ID_ALERTA, ID_REPOSITORIO, DESCRIPCION, GRAVEDAD, FECHA_CREACION) 
      VALUES 
      (:ID_ALERTA, :ID_REPOSITORIO, :DESCRIPCION, :GRAVEDAD, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'))`, [ID_ALERTA, ID_REPOSITORIO, DESCRIPCION, GRAVEDAD, FECHA_CREACION]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarAlerta = agregarAlerta;
// Función para actualizar un usuario
const actualizarAlerta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_alerta } = req.params;
    const { ID_REPOSITORIO, DESCRIPCION, GRAVEDAD, FECHA_CREACION } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_ALERTA_SEGURIDAD 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          DESCRIPCION = :DESCRIPCION,
          GRAVEDAD = :GRAVEDAD,
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR')
      WHERE 
          id_alerta = :id_alerta
      `, [
            ID_REPOSITORIO,
            DESCRIPCION,
            GRAVEDAD,
            FECHA_CREACION,
            id_alerta
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
exports.actualizarAlerta = actualizarAlerta;
// Función para eliminar un usuario
const eliminarAlerta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_alerta } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_ALERTA_SEGURIDAD WHERE id_alerta = :id_alerta`, [id_alerta]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarAlerta = eliminarAlerta;
