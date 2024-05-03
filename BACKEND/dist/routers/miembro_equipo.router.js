"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const miembro_equipo_controller_1 = require("../controllers/miembro_equipo.controller");
const router = express_1.default.Router();
router.get('/:id_miembro', miembro_equipo_controller_1.obtenerMiembro_equipo);
router.get('/', miembro_equipo_controller_1.obtenerMiembro_equipos);
router.post('/', miembro_equipo_controller_1.agregarMiembro_equipo);
router.put('/:id_miembro', miembro_equipo_controller_1.actualizarMiembro_equipo);
router.delete('/:id_miembro', miembro_equipo_controller_1.eliminarMiembro_equipo);
exports.default = router;
