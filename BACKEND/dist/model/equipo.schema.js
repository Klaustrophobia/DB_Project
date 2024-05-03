"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipoSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_equipo: String,
    id_equipo: Number,
    nombre_equipo: String,
    id_organizacion: (Array),
    descripcion: String,
    fecha_creacion: Date,
});
exports.EquipoSchema = mongoose_1.default.model('equipo', schema);
