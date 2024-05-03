"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commits_controller_1 = require("../controllers/commits.controller");
const router = express_1.default.Router();
router.get('/:id_commit', commits_controller_1.obtenerCommit);
router.get('/', commits_controller_1.obtenerCommits);
router.post('/', commits_controller_1.agregarCommit);
router.put('/:id_commit', commits_controller_1.actualizarCommit);
router.delete('/:id_commit', commits_controller_1.eliminarCommit);
exports.default = router;
