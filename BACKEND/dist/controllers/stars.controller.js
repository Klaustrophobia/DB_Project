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
exports.eliminarStar = exports.actualizarStar = exports.agregarStar = exports.obtenerStars = exports.obtenerStar = void 0;
const oracledb = require('oracledb');
const database_1 = require("../utils/database");
// Función para obtener un usuario por su ID
const obtenerStar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_estrella } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_STARS WHERE id_estrella = :id_estrella`, [id_estrella]);
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
exports.obtenerStar = obtenerStar;
// Función para obtener todos los usuarios
const obtenerStars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        const result = yield connection.execute(`SELECT * FROM C##GITHUB.TBL_STARS ORDER BY id_estrella ASC`);
        yield connection.close();
        res.send(result.rows);
    }
    catch (error) {
        console.error('Error al obtener :', error);
        res.status(500).send({ message: 'Error en el servidor al obtener' });
    }
});
exports.obtenerStars = obtenerStars;
// Función para agregar un nuevo usuario
const agregarStar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_ESTRELLA, ID_USUARIO, ID_REPOSITORIO, FECHA_ESTRELLA } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`INSERT INTO C##GITHUB.TBL_STARS 
      (ID_ESTRELLA, ID_USUARIO, ID_REPOSITORIO, FECHA_ESTRELLA) 
      VALUES 
      (:ID_ESTRELLA, :ID_USUARIO, :ID_REPOSITORIO, TO_DATE(:FECHA_ESTRELLA, 'DD-MON-RR'))
      `, [ID_ESTRELLA, ID_USUARIO, ID_REPOSITORIO, FECHA_ESTRELLA]);
        yield connection.commit();
        yield connection.close();
        res.status(201).send({ message: ' agregado exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar:', error);
        res.status(500).send({ message: 'Error en el servidor al agregar' });
    }
});
exports.agregarStar = agregarStar;
// Función para actualizar un usuario
const actualizarStar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_estrella } = req.params;
    const { ID_USUARIO, ID_REPOSITORIO, FECHA_ESTRELLA } = req.body;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`UPDATE C##GITHUB.TBL_STARS 
      SET 
          ID_USUARIO = :ID_USUARIO, 
          ID_REPOSITORIO = :ID_REPOSITORIO, 
          FECHA_ESTRELLA = TO_DATE(:FECHA_ESTRELLA, 'DD-MON-RR')
      WHERE 
          ID_ESTRELLA = :ID_ESTRELLA`, [
            ID_USUARIO,
            ID_REPOSITORIO,
            FECHA_ESTRELLA,
            id_estrella
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
exports.actualizarStar = actualizarStar;
// Función para eliminar un usuario
const eliminarStar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_estrella } = req.params;
    let connection;
    try {
        yield (0, database_1.connectToDB)();
        connection = yield oracledb.getConnection();
        yield connection.execute(`DELETE FROM C##GITHUB.TBL_STARS WHERE id_estrella = :id_estrella`, [id_estrella]);
        yield connection.commit();
        yield connection.close();
        res.send({ message: 'eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send({ message: 'Error en el servidor al eliminar' });
    }
});
exports.eliminarStar = eliminarStar;
