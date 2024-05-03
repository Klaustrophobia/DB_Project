"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const alerta_seguridad_controller_1 = require("../controllers/alerta_seguridad.controller");
const router = express_1.default.Router();
router.get('/:id_alerta', alerta_seguridad_controller_1.obtenerAlerta);
router.get('/', alerta_seguridad_controller_1.obtenerAlertas);
router.post('/', alerta_seguridad_controller_1.agregarAlerta);
router.put('/:id_alerta', alerta_seguridad_controller_1.actualizarAlerta);
router.delete('/:id_alerta', alerta_seguridad_controller_1.eliminarAlerta);
exports.default = router;
