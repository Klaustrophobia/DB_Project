"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const oracledb = require('oracledb');
const schema = new mongoose_1.default.Schema({
    _id_commit: String,
    id_commit: Number,
    id_usuario: (Array),
    id_repositorio: (Array),
    commit_message: String,
    commit_date: Date,
    changes_count: Number,
});
exports.CommitsSchema = mongoose_1.default.model('commits', schema);
