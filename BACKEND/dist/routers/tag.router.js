"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tag_controller_1 = require("../controllers/tag.controller");
const router = express_1.default.Router();
router.get('/:id_tag', tag_controller_1.obtenerTag);
router.get('/', tag_controller_1.obtenerTags);
router.post('/', tag_controller_1.agregarTag);
router.put('/:id_tag', tag_controller_1.actualizarTag);
router.delete('/:id_tag', tag_controller_1.eliminarTag);
exports.default = router;
