"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const labels_controller_1 = require("../controllers/labels.controller");
const router = express_1.default.Router();
router.get('/:id_label', labels_controller_1.obtenerLabel);
router.get('/', labels_controller_1.obtenerLabels);
router.post('/', labels_controller_1.agregarLabel);
router.put('/:id_label', labels_controller_1.actualizarLabel);
router.delete('/:id_label', labels_controller_1.eliminarLabel);
exports.default = router;
