"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const oracledb = require('oracledb');
const schema = new mongoose_1.default.Schema({
    _id_config: String,
    id_config: Number,
    id_repositorio: (Array),
    tipo_acceso: String,
    fecha_creacion: Date,
});
exports.ConfigSchema = mongoose_1.default.model('config', schema);
