"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const file_modif_controller_1 = require("../controllers/file_modif.controller");
const router = express_1.default.Router();
router.get('/:id_modification', file_modif_controller_1.obtenerFile_modif);
router.get('/', file_modif_controller_1.obtenerFile_modifs);
router.post('/', file_modif_controller_1.agregarFile_modif);
router.put('/:id_modification', file_modif_controller_1.actualizarFile_modif);
router.delete('/:id_modification', file_modif_controller_1.eliminarFile_modif);
exports.default = router;
