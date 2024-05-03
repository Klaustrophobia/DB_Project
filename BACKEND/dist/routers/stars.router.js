"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stars_controller_1 = require("../controllers/stars.controller");
const router = express_1.default.Router();
router.get('/:id_estrella', stars_controller_1.obtenerStar);
router.get('/', stars_controller_1.obtenerStars);
router.post('/', stars_controller_1.agregarStar);
router.put('/:id_estrella', stars_controller_1.actualizarStar);
router.delete('/:id_estrella', stars_controller_1.eliminarStar);
exports.default = router;
