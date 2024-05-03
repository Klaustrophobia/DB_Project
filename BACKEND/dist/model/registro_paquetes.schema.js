"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registro_paqueteSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_registro: String,
    id_registro: Number,
    id_repositorio: (Array),
    nombre_paquete: String,
    version_paquete: String,
    fecha_creacion: Date,
});
exports.Registro_paqueteSchema = mongoose_1.default.model('registro_paquetes', schema);
