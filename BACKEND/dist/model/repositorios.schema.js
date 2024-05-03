"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoriosSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_repositorio: String,
    id_repositorio: Number,
    id_usuario: (Array),
    nombre_repositorio: String,
    fecha_creacion_repositorio: String,
    fecha_ultima_actualizacion: String,
    lenguaje_principal: String,
});
exports.RepositoriosSchema = mongoose_1.default.model('repositorios', schema);
