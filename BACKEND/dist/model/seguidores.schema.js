"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeguidoresSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_seguidor: String,
    id_seguidor: Number,
    id_usuario: (Array),
    fecha_seguimiento: Date,
    visibilidad: String
});
exports.SeguidoresSchema = mongoose_1.default.model('seguidores', schema);
