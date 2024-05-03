"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sponsor_elegible_controller_1 = require("../controllers/sponsor_elegible.controller");
const router = express_1.default.Router();
router.get('/:id_sponsor_elegible', sponsor_elegible_controller_1.obtenerSponsor_elegible);
router.get('/', sponsor_elegible_controller_1.obtenerSponsor_elegibles);
router.post('/', sponsor_elegible_controller_1.agregarSponsor_elegible);
router.put('/:id_sponsor_elegible', sponsor_elegible_controller_1.actualizarSponsor_elegible);
router.delete('/:id_sponsor_elegible', sponsor_elegible_controller_1.eliminarSponsor_elegible);
exports.default = router;
