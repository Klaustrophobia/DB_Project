"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const milestone_controller_1 = require("../controllers/milestone.controller");
const router = express_1.default.Router();
router.get('/:id_milestone', milestone_controller_1.obtenerMilestone);
router.get('/', milestone_controller_1.obtenerMilestones);
router.post('/', milestone_controller_1.agregarMilestone);
router.put('/:id_milestone', milestone_controller_1.actualizarMilestone);
router.delete('/:id_milestone', milestone_controller_1.eliminarMilestone);
exports.default = router;
