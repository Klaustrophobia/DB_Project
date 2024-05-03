"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gist_controller_1 = require("../controllers/gist.controller");
const router = express_1.default.Router();
router.get('/:id_gist', gist_controller_1.obtenerGist);
router.get('/', gist_controller_1.obtenerGists);
router.post('/', gist_controller_1.agregarGist);
router.put('/:id_gist', gist_controller_1.actualizarGist);
router.delete('/:id_gist', gist_controller_1.eliminarGist);
exports.default = router;
