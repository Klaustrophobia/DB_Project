"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const secretos_controller_1 = require("../controllers/secretos.controller");
const router = express_1.default.Router();
router.get('/:id_secrets', secretos_controller_1.obtenerSecreto);
router.get('/', secretos_controller_1.obtenerSecretos);
router.post('/', secretos_controller_1.agregarSecreto);
router.put('/:id_secrets', secretos_controller_1.actualizarSecreto);
router.delete('/:id_secrets', secretos_controller_1.eliminarSecreto);
exports.default = router;
