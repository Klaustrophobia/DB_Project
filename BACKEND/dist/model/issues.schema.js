"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuesSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_issues: String,
    id_issues: Number,
    id_repositorio: (Array),
    titulo_issue: String,
    descripcion_issue: String,
    estado_issue: Number,
    fecha_creacion_issue: Date,
    ultima_fecha_actualizacion: Date,
});
exports.IssuesSchema = mongoose_1.default.model('issues', schema);
