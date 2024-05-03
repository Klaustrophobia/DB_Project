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
exports.eliminarDeploy = exports.actualizarDeploy = exports.agregarDeploy = exports.obtenerDeploys = exports.obtenerDeploy = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerDeploy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_deploy } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_DEPLOYMENT WHERE id_deploy = :id_deploy`, [id_deploy]);
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
exports.obtenerDeploy = obtenerDeploy;
// Función para obtener todos los usuarios
const obtenerDeploys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_DEPLOYMENT ORDER BY id_deploy ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerDeploys = obtenerDeploys;
// Función para agregar un nuevo usuario
const agregarDeploy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_DEPLOY, ID_USUARIO, ID_REPOSITORIO, ENTORNO, DATE_DEPLOY, STATUS } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_DEPLOYMENT 
      (ID_DEPLOY, ID_USUARIO, ID_REPOSITORIO, ENTORNO, DATE_DEPLOY, STATUS) 
      VALUES 
      (:ID_DEPLOY, :ID_USUARIO, :ID_REPOSITORIO, :ENTORNO, TO_DATE(:DATE_DEPLOY, 'DD-MON-RR'), :STATUS)
      `, [ID_DEPLOY, ID_USUARIO, ID_REPOSITORIO, ENTORNO, DATE_DEPLOY, STATUS]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarDeploy = agregarDeploy;
// Función para actualizar un usuario
const actualizarDeploy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_deploy } = req.params;
    const { ID_USUARIO, ID_REPOSITORIO, ENTORNO, DATE_DEPLOY, STATUS } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_DEPLOYMENT 
      SET 
          ID_USUARIO = :ID_USUARIO,
          ID_REPOSITORIO = :ID_REPOSITORIO,
          ENTORNO = :ENTORNO,
          DATE_DEPLOY = TO_DATE(:DATE_DEPLOY, 'DD-MON-RR'),
          STATUS = :STATUS
      WHERE 
          id_deploy = :id_deploy
      `, [
            ID_USUARIO,
            ID_REPOSITORIO,
            ENTORNO,
            DATE_DEPLOY,
            STATUS,
            id_deploy
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
exports.actualizarDeploy = actualizarDeploy;
// Función para eliminar un usuario
const eliminarDeploy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_deploy } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_DEPLOYMENT WHERE id_deploy = :id_deploy`, [id_deploy]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarDeploy = eliminarDeploy;
