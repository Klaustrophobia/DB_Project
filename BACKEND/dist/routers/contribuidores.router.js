"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contribuidores_controller_1 = require("../controllers/contribuidores.controller");
const router = express_1.default.Router();
router.get('/:id_contribuidor', contribuidores_controller_1.obtenerContribuidor);
router.get('/', contribuidores_controller_1.obtenerContribuidores);
router.post('/', contribuidores_controller_1.agregarContribuidor);
router.put('/:id_contribuidor', contribuidores_controller_1.actualizarContribuidor);
router.delete('/:id_contribuidor', contribuidores_controller_1.eliminarContribuidor);
exports.default = router;
