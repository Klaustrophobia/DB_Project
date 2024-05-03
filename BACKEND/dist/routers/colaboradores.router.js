"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const colaboradores_controller_1 = require("../controllers/colaboradores.controller");
const router = express_1.default.Router();
router.get('/:id_colaborador', colaboradores_controller_1.obtenerColaborador);
router.get('/', colaboradores_controller_1.obtenerColaboradores);
router.post('/', colaboradores_controller_1.agregarColaborador);
router.put('/:id_colaborador', colaboradores_controller_1.actualizarColaborador);
router.delete('/:id_colaborador', colaboradores_controller_1.eliminarColaborador);
exports.default = router;
