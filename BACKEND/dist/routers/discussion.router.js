"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const discussion_controller_1 = require("../controllers/discussion.controller");
const router = express_1.default.Router();
router.get('/:id_discusion', discussion_controller_1.obtenerDiscussion);
router.get('/', discussion_controller_1.obtenerDiscussions);
router.post('/', discussion_controller_1.agregarDiscussion);
router.put('/:id_discusion', discussion_controller_1.actualizarDiscussion);
router.delete('/:id_discusion', discussion_controller_1.eliminarDiscussion);
exports.default = router;
