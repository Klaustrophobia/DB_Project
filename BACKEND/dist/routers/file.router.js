"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const file_controller_1 = require("../controllers/file.controller");
const router = express_1.default.Router();
router.get('/:id_file', file_controller_1.obtenerFile);
router.get('/', file_controller_1.obtenerFiles);
router.post('/', file_controller_1.agregarFile);
router.put('/:id_file', file_controller_1.actualizarFile);
router.delete('/:id_file', file_controller_1.eliminarFile);
exports.default = router;
