"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentarioSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const oracledb = require('oracledb');
const schema = new mongoose_1.default.Schema({
    _id_comentario: String,
    id_comentario: Number,
    id_usuario: (Array),
    comentario: String,
    fecha_comentario: Date
});
exports.ComentarioSchema = mongoose_1.default.model('comentario', schema);
