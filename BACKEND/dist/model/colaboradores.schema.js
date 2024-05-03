"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColaboradoresSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const oracledb = require('oracledb');
const schema = new mongoose_1.default.Schema({
    _id_colaborador: String,
    id_colaborador: Number,
    id_repositorio: (Array),
    nivel_permiso: String,
    fecha_union: String,
    ultima_fecha_acceso: Date,
    status: String,
    comentarios: String,
});
exports.ColaboradoresSchema = mongoose_1.default.model('colaboradores', schema);
