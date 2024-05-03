"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const seguidores_controller_1 = require("../controllers/seguidores.controller");
const router = express_1.default.Router();
router.get('/:id_seguidor', seguidores_controller_1.obtenerSeguidor);
router.get('/', seguidores_controller_1.obtenerSeguidores);
router.post('/', seguidores_controller_1.agregarSeguidor);
router.delete('/:id_seguidor', seguidores_controller_1.eliminarSeguidor);
exports.default = router;
