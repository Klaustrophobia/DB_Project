"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sponsor_otros_userSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_sponsor_otros_user: String,
    id_sponsor_otros_user: Number,
    id_proyecto: (Array),
    lista_sponsor: String,
    fecha_creacion: Date,
});
exports.Sponsor_otros_userSchema = mongoose_1.default.model('sponsor_otros_user', schema);
