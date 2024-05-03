"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_usuario: String,
    id_usuario: Number,
    nombre: String,
    apellido: String,
    imagen: String,
    correo: String,
    contrasena: String,
    status: String,
    ubicacion: String,
    biografia: String,
    repositorios: (Array),
});
exports.UsuariosSchema = mongoose_1.default.model('usuarios', schema);
