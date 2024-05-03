"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretosSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_secrets: String,
    id_secrets: Number,
    id_repositorio: (Array),
    nombre: String,
    valor: String,
    fecha_creacion: Date,
});
exports.SecretosSchema = mongoose_1.default.model('secretos', schema);
