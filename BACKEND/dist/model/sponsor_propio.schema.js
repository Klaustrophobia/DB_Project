"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sponsor_propioSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id_sponsor_propio: String,
    id_sponsor_propio: Number,
    id_sponsor_elegible: (Array),
    id_usuario: (Array),
});
exports.Sponsor_propioSchema = mongoose_1.default.model('sponsor_propio', schema);
