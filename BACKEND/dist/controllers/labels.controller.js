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
exports.eliminarLabel = exports.actualizarLabel = exports.agregarLabel = exports.obtenerLabels = exports.obtenerLabel = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerLabel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_label } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_LABELS WHERE id_label = :id_label`, [id_label]);
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
exports.obtenerLabel = obtenerLabel;
// Función para obtener todos los usuarios
const obtenerLabels = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_LABELS ORDER BY id_label ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerLabels = obtenerLabels;
// Función para agregar un nuevo usuario
const agregarLabel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_LABEL, ID_REPOSITORIO, NOMBRE, DESCRPTION, FECHA_CREACION, FECHA_ULT_ACT, NIVEL_PRIORIDAD, RESTRCCIONES, SCOPE } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_LABELS 
      (ID_LABEL, ID_REPOSITORIO, NOMBRE, DESCRPTION, FECHA_CREACION, FECHA_ULT_ACT, NIVEL_PRIORIDAD, RESTRCCIONES, SCOPE) 
      VALUES 
      (:ID_LABEL, :ID_REPOSITORIO, :NOMBRE, :DESCRPTION, TO_DATE(:FECHA_CREACION, 'DD-MON-RR'), TO_DATE(:FECHA_ULT_ACT, 'DD-MON-RR'), :NIVEL_PRIORIDAD, :RESTRCCIONES, :SCOPE)`, [ID_LABEL, ID_REPOSITORIO, NOMBRE, DESCRPTION, FECHA_CREACION, FECHA_ULT_ACT, NIVEL_PRIORIDAD, RESTRCCIONES, SCOPE]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarLabel = agregarLabel;
// Función para actualizar un usuario
const actualizarLabel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_label } = req.params;
    const { ID_REPOSITORIO, NOMBRE, DESCRPTION, FECHA_CREACION, FECHA_ULT_ACT, NIVEL_PRIORIDAD, RESTRCCIONES, SCOPE } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_LABELS 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          NOMBRE = :NOMBRE,
          DESCRPTION = :DESCRPTION,
          FECHA_CREACION = TO_DATE(:FECHA_CREACION, 'DD-MON-RR'),
          FECHA_ULT_ACT = TO_DATE(:FECHA_ULT_ACT, 'DD-MON-RR'),
          NIVEL_PRIORIDAD = :NIVEL_PRIORIDAD,
          RESTRCCIONES = :RESTRCCIONES,
          SCOPE = :SCOPE
      WHERE 
          id_label = :id_label`, [
            ID_REPOSITORIO,
            NOMBRE,
            DESCRPTION,
            FECHA_CREACION,
            FECHA_ULT_ACT,
            NIVEL_PRIORIDAD,
            RESTRCCIONES,
            SCOPE,
            id_label
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
exports.actualizarLabel = actualizarLabel;
// Función para eliminar un usuario
const eliminarLabel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_label } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_LABELS WHERE id_label = :id_label`, [id_label]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarLabel = eliminarLabel;
