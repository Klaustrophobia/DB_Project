"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_tag: String,
    id_tag: Number,
    id_repositorio: (Array),
    titulo: String,
    contenido: String,
    fecha_creacion: Date,
});
exports.TagSchema = mongoose_1.default.model('tags', schema);
