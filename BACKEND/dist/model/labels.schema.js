"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_label: String,
    id_label: Number,
    id_repositorio: (Array),
    nombre: String,
    descripcion: String,
    fecha_creacion: Date,
    fecha_ultima_actualizacion: Date,
    nivel_prioridad: String,
    restricciones: String,
    scope: String,
});
exports.LabelsSchema = mongoose_1.default.model('labels', schema);
