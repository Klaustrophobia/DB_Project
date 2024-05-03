"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilestoneSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_milestone: String,
    id_milestone: Number,
    id_repositorio: (Array),
    nombre: String,
    descripcion: String,
    due_date: Date,
});
exports.MilestoneSchema = mongoose_1.default.model('milestone', schema);
