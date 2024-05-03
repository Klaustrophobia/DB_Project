"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pull_requestSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_pull_request: String,
    id_pull_request: Number,
    id_repositorio: (Array),
    titulo: String,
    description: String,
    estado: String,
    fecha_creacion: Date,
    fecha_cierre: Date,
    fecha_merge: Date,
    rama_base: String,
    numero_commits: Number,
    review_status: String,
});
exports.Pull_requestSchema = mongoose_1.default.model('pull_request', schema);
