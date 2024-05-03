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
exports.eliminarIssue = exports.actualizarIssue = exports.agregarIssue = exports.obtenerIssues = exports.obtenerIssue = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerIssue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_issues } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_ISSUES WHERE id_issues = :id_issues`, [id_issues]);
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
exports.obtenerIssue = obtenerIssue;
// Función para obtener todos los usuarios
const obtenerIssues = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_ISSUES ORDER BY id_issues ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerIssues = obtenerIssues;
// Función para agregar un nuevo usuario
const agregarIssue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_ISSUES, ID_REPOSITORIO, TITULO_ISSUE, DESCRIPCION_ISSUE, ESTADO_ISSUE, FECHA_CREACION_ISSUE, FECHA_CIERRE_ISSUE, ULTIMA_FECHA_ACTUALIZACION } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_ISSUES 
      (ID_ISSUES, ID_REPOSITORIO, TITULO_ISSUE, DESCRIPCION_ISSUE, ESTADO_ISSUE, FECHA_CREACION_ISSUE, FECHA_CIERRE_ISSUE, ULTIMA_FECHA_ACTUALIZACION) 
      VALUES 
      (:ID_ISSUES, :ID_REPOSITORIO, :TITULO_ISSUE, :DESCRIPCION_ISSUE, :ESTADO_ISSUE, TO_DATE(:FECHA_CREACION_ISSUE, 'DD-MON-RR'), TO_DATE(:FECHA_CIERRE_ISSUE, 'DD-MON-RR'), TO_DATE(:ULTIMA_FECHA_ACTUALIZACION, 'DD-MON-RR'))`, [ID_ISSUES, ID_REPOSITORIO, TITULO_ISSUE, DESCRIPCION_ISSUE, ESTADO_ISSUE, FECHA_CREACION_ISSUE, FECHA_CIERRE_ISSUE, ULTIMA_FECHA_ACTUALIZACION]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarIssue = agregarIssue;
// Función para actualizar un usuario
const actualizarIssue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_issues } = req.params;
    const { ID_REPOSITORIO, TITULO_ISSUE, DESCRIPCION_ISSUE, ESTADO_ISSUE, FECHA_CREACION_ISSUE, FECHA_CIERRE_ISSUE, ULTIMA_FECHA_ACTUALIZACION } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_ISSUES 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          TITULO_ISSUE = :TITULO_ISSUE,
          DESCRIPCION_ISSUE = :DESCRIPCION_ISSUE,
          ESTADO_ISSUE = :ESTADO_ISSUE,
          FECHA_CREACION_ISSUE = TO_DATE(:FECHA_CREACION_ISSUE, 'DD-MON-RR'),
          FECHA_CIERRE_ISSUE = TO_DATE(:FECHA_CIERRE_ISSUE, 'DD-MON-RR'),
          ULTIMA_FECHA_ACTUALIZACION = TO_DATE(:ULTIMA_FECHA_ACTUALIZACION, 'DD-MON-RR')
      WHERE 
          id_issues = :id_issues`, [
            ID_REPOSITORIO,
            TITULO_ISSUE,
            DESCRIPCION_ISSUE,
            ESTADO_ISSUE,
            FECHA_CREACION_ISSUE,
            FECHA_CIERRE_ISSUE,
            ULTIMA_FECHA_ACTUALIZACION,
            id_issues
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
exports.actualizarIssue = actualizarIssue;
// Función para eliminar un usuario
const eliminarIssue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_issues } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_ISSUES WHERE id_issues = :id_issues`, [id_issues]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarIssue = eliminarIssue;
