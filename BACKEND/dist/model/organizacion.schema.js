"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizacionSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_organizacion: String,
    id_organizacion: Number,
    id_usuario: (Array),
    descripcion: String,
    fecha_creacion: Date,
    locacion: String,
    website: String,
    numero_miembros: Number,
});
exports.OrganizacionSchema = mongoose_1.default.model('organizacion', schema);
