"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const router = express_1.default.Router();
router.post('/login', usuarios_controller_1.login);
router.get('/:id_usuario', usuarios_controller_1.obtenerUsuario);
router.get('/', usuarios_controller_1.obtenerUsuarios);
router.post('/', usuarios_controller_1.agregarUsuario);
router.put('/:id_usuario', usuarios_controller_1.actualizarUsuario);
router.delete('/:id_usuario', usuarios_controller_1.eliminarUsuario);
exports.default = router;
