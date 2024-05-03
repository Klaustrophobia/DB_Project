"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registro_paquetes_controller_1 = require("../controllers/registro_paquetes.controller");
const router = express_1.default.Router();
router.get('/:id_registro', registro_paquetes_controller_1.obtenerRegistro_paquete);
router.get('/', registro_paquetes_controller_1.obtenerRegistro_paquetes);
router.post('/', registro_paquetes_controller_1.agregarRegistro_paquete);
router.put('/:id_registro', registro_paquetes_controller_1.actualizarRegistro_paquete);
router.delete('/:id_registro', registro_paquetes_controller_1.eliminarRegistro_paquete);
exports.default = router;
