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
exports.eliminarMilestone = exports.actualizarMilestone = exports.agregarMilestone = exports.obtenerMilestones = exports.obtenerMilestone = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerMilestone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_milestone } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_MILESTONES WHERE id_milestone = :id_milestone`, [id_milestone]);
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
exports.obtenerMilestone = obtenerMilestone;
// Función para obtener todos los usuarios
const obtenerMilestones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_MILESTONES ORDER BY id_milestone ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerMilestones = obtenerMilestones;
// Función para agregar un nuevo usuario
const agregarMilestone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_MILESTONE, ID_REPOSITORIO, TITTLE_MILESTONE, DESCRIPTION_MILESTONE, DUE_DATE } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_MILESTONES 
      (ID_MILESTONE, ID_REPOSITORIO, TITTLE_MILESTONE, DESCRIPTION_MILESTONE, DUE_DATE) 
      VALUES 
      (:ID_MILESTONE, :ID_REPOSITORIO, :TITTLE_MILESTONE, :DESCRIPTION_MILESTONE, TO_DATE(:DUE_DATE, 'DD-MON-RR'))`, [ID_MILESTONE, ID_REPOSITORIO, TITTLE_MILESTONE, DESCRIPTION_MILESTONE, DUE_DATE]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarMilestone = agregarMilestone;
// Función para actualizar un usuario
const actualizarMilestone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_milestone } = req.params;
    const { ID_REPOSITORIO, TITTLE_MILESTONE, DESCRIPTION_MILESTONE, DUE_DATE } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_MILESTONES 
      SET 
          ID_REPOSITORIO = :ID_REPOSITORIO,
          TITTLE_MILESTONE = :TITTLE_MILESTONE,
          DESCRIPTION_MILESTONE = :DESCRIPTION_MILESTONE,
          DUE_DATE = TO_DATE(:DUE_DATE, 'DD-MON-RR')
      WHERE 
          id_milestone = :id_milestone`, [
            ID_REPOSITORIO,
            TITTLE_MILESTONE,
            DESCRIPTION_MILESTONE,
            DUE_DATE,
            id_milestone
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
exports.actualizarMilestone = actualizarMilestone;
// Función para eliminar un usuario
const eliminarMilestone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_milestone } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_MILESTONES WHERE id_milestone = :id_milestone`, [id_milestone]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarMilestone = eliminarMilestone;
