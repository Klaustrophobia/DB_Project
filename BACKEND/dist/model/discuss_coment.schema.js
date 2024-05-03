"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discuss_comentSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_comentario: String,
    id_comentario: Number,
    id_usuario: (Array),
    id_discusion: (Array),
    contenido: String,
    fecha_creacion: Date,
});
exports.Discuss_comentSchema = mongoose_1.default.model('discuss_coment', schema);
