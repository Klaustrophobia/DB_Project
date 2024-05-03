"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sponsor_propio_controller_1 = require("../controllers/sponsor_propio.controller");
const router = express_1.default.Router();
router.get('/:id_sponsor_propio', sponsor_propio_controller_1.obtenerSponsor_propio);
router.get('/', sponsor_propio_controller_1.obtenerSponsor_propios);
router.post('/', sponsor_propio_controller_1.agregarSponsor_propio);
router.put('/:id_sponsor_propio', sponsor_propio_controller_1.actualizarSponsor_propio);
router.delete('/:id_sponsor_propio', sponsor_propio_controller_1.eliminarSponsor_propio);
exports.default = router;
