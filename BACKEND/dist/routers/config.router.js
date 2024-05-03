"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_controller_1 = require("../controllers/config.controller");
const router = express_1.default.Router();
router.get('/:id_configuracion', config_controller_1.obtenerConfig);
router.get('/', config_controller_1.obtenerConfigs);
router.post('/', config_controller_1.agregarConfig);
router.put('/:id_configuracion', config_controller_1.actualizarConfig);
router.delete('/:id_configuracion', config_controller_1.eliminarConfig);
exports.default = router;
