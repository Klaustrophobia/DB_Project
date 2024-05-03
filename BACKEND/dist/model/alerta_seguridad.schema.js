"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alerta_seguridadSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const oracledb = require('oracledb');
const schema = new mongoose_1.default.Schema({
    _id_alerta: String,
    id_alerta: Number,
    id_repositorio: (Array),
    descripcion: String,
    gravedad: String,
    fecha_creacion: Date,
});
exports.Alerta_seguridadSchema = mongoose_1.default.model('alerta_seguridad', schema);
