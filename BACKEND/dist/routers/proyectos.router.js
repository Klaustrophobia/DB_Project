"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const proyectos_controller_1 = require("../controllers/proyectos.controller");
const router = express_1.default.Router();
router.get('/:id_proyecto', proyectos_controller_1.obtenerProyecto);
router.get('/', proyectos_controller_1.obtenerProyectos);
router.post('/', proyectos_controller_1.agregarProyecto);
router.put('/:id_proyecto', proyectos_controller_1.actualizarProyecto);
router.delete('/:id_proyecto', proyectos_controller_1.eliminarProyecto);
exports.default = router;
