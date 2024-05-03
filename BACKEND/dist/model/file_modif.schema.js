"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.File_modifSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_file_modif: String,
    id_file_modif: Number,
    id_commit: (Array),
    file_path: String,
    lines_added: String,
    lines_deleted: String,
    modif_type: String,
});
exports.File_modifSchema = mongoose_1.default.model('file_modif', schema);
