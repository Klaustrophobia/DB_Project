"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const organizacion_controller_1 = require("../controllers/organizacion.controller");
const router = express_1.default.Router();
router.get('/:id_organizacion', organizacion_controller_1.obtenerOrganizacion);
router.get('/', organizacion_controller_1.obtenerOrganizaciones);
router.post('/', organizacion_controller_1.agregarOrganizacion);
router.put('/:id_organizacion', organizacion_controller_1.actualizarOrganizacion);
router.delete('/:id_organizacion', organizacion_controller_1.eliminarOrganizacion);
exports.default = router;
