"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GistSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_gist: String,
    id_gist: Number,
    id_usuario: (Array),
    descripcion_gist: String,
    fecha_creacion: Date,
});
exports.GistSchema = mongoose_1.default.model('gist', schema);
