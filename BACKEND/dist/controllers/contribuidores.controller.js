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
exports.eliminarContribuidor = exports.actualizarContribuidor = exports.agregarContribuidor = exports.obtenerContribuidores = exports.obtenerContribuidor = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerContribuidor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_contribuidor } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_CONTRIBUIDORES WHERE id_contribuidor = :id_contribuidor`, [id_contribuidor]);
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
exports.obtenerContribuidor = obtenerContribuidor;
// Función para obtener todos los usuarios
const obtenerContribuidores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_CONTRIBUIDORES ORDER BY id_contribuidor ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerContribuidores = obtenerContribuidores;
// Función para agregar un nuevo usuario
const agregarContribuidor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_CONTRIBUIDOR, ID_USUARIO, ID_REPOSITORIO, CANTIDAD_CONTRIBUICIONES, DATE_FIRST_CTRB, DATE_LAST_CTRB } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_CONTRIBUIDORES 
      (ID_CONTRIBUIDOR, ID_USUARIO, ID_REPOSITORIO, CANTIDAD_CONTRIBUICIONES, DATE_FIRST_CTRB, DATE_LAST_CTRB) 
      VALUES 
      (:ID_CONTRIBUIDOR, :ID_USUARIO, :ID_REPOSITORIO, :CANTIDAD_CONTRIBUICIONES, TO_DATE(:DATE_FIRST_CTRB, 'DD-MON-RR'), TO_DATE(:DATE_LAST_CTRB, 'DD-MON-RR'))`, [ID_CONTRIBUIDOR, ID_USUARIO, ID_REPOSITORIO, CANTIDAD_CONTRIBUICIONES, DATE_FIRST_CTRB, DATE_LAST_CTRB]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarContribuidor = agregarContribuidor;
// Función para actualizar un usuario
const actualizarContribuidor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_contribuidor } = req.params;
    const { ID_USUARIO, ID_REPOSITORIO, CANTIDAD_CONTRIBUICIONES, DATE_FIRST_CTRB, DATE_LAST_CTRB } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_CONTRIBUIDORES 
      SET 
          ID_USUARIO = :ID_USUARIO,
          ID_REPOSITORIO = :ID_REPOSITORIO,
          CANTIDAD_CONTRIBUICIONES = :CANTIDAD_CONTRIBUICIONES,
          DATE_FIRST_CTRB = TO_DATE(:DATE_FIRST_CTRB, 'DD-MON-RR'),
          DATE_LAST_CTRB = TO_DATE(:DATE_LAST_CTRB, 'DD-MON-RR')
      WHERE 
          id_contribuidor = :id_contribuidor`, [
            ID_USUARIO,
            ID_REPOSITORIO,
            CANTIDAD_CONTRIBUICIONES,
            DATE_FIRST_CTRB,
            DATE_LAST_CTRB,
            id_contribuidor
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
exports.actualizarContribuidor = actualizarContribuidor;
// Función para eliminar un usuario
const eliminarContribuidor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_contribuidor } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_CONTRIBUIDORES WHERE id_contribuidor = :id_contribuidor`, [id_contribuidor]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarContribuidor = eliminarContribuidor;
