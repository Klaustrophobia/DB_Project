"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Sponsor_otros_user_controller_1 = require("../controllers/Sponsor_otros_user.controller");
const router = express_1.default.Router();
router.get('/:id_sponsor_otros', Sponsor_otros_user_controller_1.obtenerSponsor_otros_user);
router.get('/', Sponsor_otros_user_controller_1.obtenerSponsor_otros_users);
router.post('/', Sponsor_otros_user_controller_1.agregarSponsor_otros_user);
router.put('/:id_sponsor_otros', Sponsor_otros_user_controller_1.actualizarSponsor_otros_user);
router.delete('/:id_sponsor_otros', Sponsor_otros_user_controller_1.eliminarSponsor_otros_user);
exports.default = router;
