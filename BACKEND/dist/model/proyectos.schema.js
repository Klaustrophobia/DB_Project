"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectosSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_proyecto: String,
    id_proyecto: Number,
    nombre: String,
    id_usuario: (Array),
    descripcion_proyecto: String,
    fecha_creacion: Date,
});
exports.ProyectosSchema = mongoose_1.default.model('proyectos', schema);
