"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContribuidoresSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_contribuidor: String,
    id_contribuidor: Number,
    id_usuario: (Array),
    id_repositorio: (Array),
    cantidad_contribuciones: String,
    date_first_ctrb: Date,
    date_last_ctrb: Date,
});
exports.ContribuidoresSchema = mongoose_1.default.model('contribuidores', schema);
