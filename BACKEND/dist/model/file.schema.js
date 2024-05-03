"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_file: String,
    id_file: Number,
    id_repositorio: (Array),
    nombre: String,
    extension: String,
    tamanio: Number,
    fecha_creacion: Date,
    date_last_modif: Date,
});
exports.FileSchema = mongoose_1.default.model('file', schema);
