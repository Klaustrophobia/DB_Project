"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comentario_controller_1 = require("../controllers/comentario.controller");
const router = express_1.default.Router();
router.get('/:id_comentario', comentario_controller_1.obtenerComentario);
router.get('/', comentario_controller_1.obtenerComentarios);
router.post('/', comentario_controller_1.agregarComentario);
router.delete('/:id_comentario', comentario_controller_1.eliminarComentario);
exports.default = router;
