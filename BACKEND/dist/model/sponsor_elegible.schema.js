"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sponsor_elegibleSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_sponsor_elegible: String,
    id_sponsor_elegible: Number,
    descripcion: String,
});
exports.Sponsor_elegibleSchema = mongoose_1.default.model('sponsor_elegible', schema);
