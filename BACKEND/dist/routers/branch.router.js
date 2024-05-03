"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const branch_controller_1 = require("../controllers/branch.controller");
const router = express_1.default.Router();
router.get('/:id_branch', branch_controller_1.obtenerBranch);
router.get('/', branch_controller_1.obtenerBranchs);
router.post('/', branch_controller_1.agregarBranch);
router.put('/:id_branch', branch_controller_1.actualizarBranch);
router.delete('/:id_branch', branch_controller_1.eliminarBranch);
exports.default = router;
