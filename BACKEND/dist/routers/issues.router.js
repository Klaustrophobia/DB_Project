"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const issues_controller_1 = require("../controllers/issues.controller");
const router = express_1.default.Router();
router.get('/:id_issues', issues_controller_1.obtenerIssue);
router.get('/', issues_controller_1.obtenerIssues);
router.post('/', issues_controller_1.agregarIssue);
router.put('/:id_issues', issues_controller_1.actualizarIssue);
router.delete('/:id_issues', issues_controller_1.eliminarIssue);
exports.default = router;
