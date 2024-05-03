"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const repositorios_controller_1 = require("../controllers/repositorios.controller");
const router = express_1.default.Router();
router.get('/:id_repositorio', repositorios_controller_1.obtenerRepositorio);
router.get('/', repositorios_controller_1.obtenerRepositorios);
router.post('/', repositorios_controller_1.agregarRepositorio);
router.put('/:id_repositorio', repositorios_controller_1.actualizarRepositorio);
router.delete('/:id_repositorio', repositorios_controller_1.eliminarRepositorio);
exports.default = router;
