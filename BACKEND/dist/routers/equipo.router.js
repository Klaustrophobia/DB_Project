"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const equipo_controller_1 = require("../controllers/equipo.controller");
const router = express_1.default.Router();
router.get('/:id_equipo', equipo_controller_1.obtenerEquipo);
router.get('/', equipo_controller_1.obtenerEquipos);
router.post('/', equipo_controller_1.agregarEquipo);
router.put('/:id_equipo', equipo_controller_1.actualizarEquipo);
router.delete('/:id_equipo', equipo_controller_1.eliminarEquipo);
exports.default = router;
