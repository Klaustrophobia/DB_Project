"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const oracledb = require('oracledb');
const schema = new mongoose_1.default.Schema({
    _id_branch: String,
    id_branch: Number,
    id_repositorio: (Array),
    nombre: String,
    fecha_creacion: Date,
});
exports.BranchSchema = mongoose_1.default.model('branch', schema);
