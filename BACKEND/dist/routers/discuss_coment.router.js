"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const discuss_coment_controller_1 = require("../controllers/discuss_coment.controller");
const router = express_1.default.Router();
router.get('/:id_comentario', discuss_coment_controller_1.obtenerDiscuss_coment);
router.get('/', discuss_coment_controller_1.obtenerDiscuss_coments);
router.post('/', discuss_coment_controller_1.agregarDiscuss_coment);
router.put('/:id_comentario', discuss_coment_controller_1.actualizarDiscuss_coment);
router.delete('/:id_comentario', discuss_coment_controller_1.eliminarDiscuss_coment);
exports.default = router;
