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
exports.eliminarBranch = exports.actualizarBranch = exports.agregarBranch = exports.obtenerBranchs = exports.obtenerBranch = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerBranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_branch } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_BRANCH WHERE id_branch = :id_branch`, [id_branch]);
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
exports.obtenerBranch = obtenerBranch;
// Función para obtener todos los usuarios
const obtenerBranchs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_BRANCH ORDER BY id_branch ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerBranchs = obtenerBranchs;
// Función para agregar un nuevo usuario
const agregarBranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_BRANCH, ID_REPOSITORIO, NOMBRE, FECHA_CREACION } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_BRANCH 
      (ID_BRANCH, ID_REPOSITORIO, NOMBRE, FECHA_CREACION) 
      VALUES 
      (:ID_BRANCH, :ID_REPOSITORIO, :NOMBRE, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'))`, [ID_BRANCH, ID_REPOSITORIO, NOMBRE, FECHA_CREACION]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarBranch = agregarBranch;
// Función para actualizar un usuario
const actualizarBranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_branch } = req.params;
    const { ID_REPOSITORIO, NOMBRE, FECHA_CREACION } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_BRANCH 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          NOMBRE = :NOMBRE,
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR')
      WHERE 
          id_branch = :id_branch`, [
            ID_REPOSITORIO,
            NOMBRE,
            FECHA_CREACION,
            id_branch
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
exports.actualizarBranch = actualizarBranch;
// Función para eliminar un usuario
const eliminarBranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_branch } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_BRANCH WHERE id_branch = :id_branch`, [id_branch]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarBranch = eliminarBranch;
