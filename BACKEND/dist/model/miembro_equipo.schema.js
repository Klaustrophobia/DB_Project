"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Miembro_equipoSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_miembro: String,
    id_miembro: Number,
    id_usuario: (Array),
    rol: String,
});
exports.Miembro_equipoSchema = mongoose_1.default.model('miembro_equipo', schema);
