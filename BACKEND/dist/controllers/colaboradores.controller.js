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
exports.eliminarColaborador = exports.actualizarColaborador = exports.agregarColaborador = exports.obtenerColaboradores = exports.obtenerColaborador = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerColaborador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_colaborador } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_COLABORADORES WHERE id_colaborador = :id_colaborador`, [id_colaborador]);
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
exports.obtenerColaborador = obtenerColaborador;
// Función para obtener todos los usuarios
const obtenerColaboradores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_COLABORADORES ORDER BY id_colaborador ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerColaboradores = obtenerColaboradores;
// Función para agregar un nuevo usuario
const agregarColaborador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_COLABORADOR, ID_REPOSITORIO, NIVEL_PERMISO, FECHA_UNION, ULTIMA_FECHA_ACCESO, STATUS, COMENTARIOS } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_COLABORADORES 
      (ID_COLABORADOR, ID_REPOSITORIO, NIVEL_PERMISO, FECHA_UNION, ULTIMA_FECHA_ACCESO, STATUS, COMENTARIOS) 
      VALUES 
      (:ID_COLABORADOR, :ID_REPOSITORIO, :NIVEL_PERMISO, TO_DATE(:FECHA_UNION, 'DD-MON-RR'), TO_DATE(:ULTIMA_FECHA_ACCESO, 'DD-MON-RR'), :STATUS, :COMENTARIOS);
      `, [ID_COLABORADOR, ID_REPOSITORIO, NIVEL_PERMISO, FECHA_UNION, ULTIMA_FECHA_ACCESO, STATUS, COMENTARIOS]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarColaborador = agregarColaborador;
// Función para actualizar un usuario
const actualizarColaborador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_colaborador } = req.params;
    const { ID_REPOSITORIO, NIVEL_PERMISO, FECHA_UNION, ULTIMA_FECHA_ACCESO, STATUS, COMENTARIOS } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_COLABORADORES 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          NIVEL_PERMISO = :NIVEL_PERMISO,
          FECHA_UNION = TO_DATE(:FECHA_UNION, 'DD-MON-RR'),
          ULTIMA_FECHA_ACCESO = TO_DATE(:ULTIMA_FECHA_ACCESO, 'DD-MON-RR'),
          STATUS = :STATUS,
          COMENTARIOS = :COMENTARIOS
      WHERE 
          id_colaborador = :id_colaborador
      `, [
            ID_REPOSITORIO,
            NIVEL_PERMISO,
            FECHA_UNION,
            ULTIMA_FECHA_ACCESO,
            STATUS,
            COMENTARIOS,
            id_colaborador
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
exports.actualizarColaborador = actualizarColaborador;
// Función para eliminar un usuario
const eliminarColaborador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_colaborador } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_COLABORADORES WHERE id_colaborador = :id_colaborador`, [id_colaborador]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarColaborador = eliminarColaborador;
