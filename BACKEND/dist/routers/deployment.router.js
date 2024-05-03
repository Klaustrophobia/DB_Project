"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const deployment_controller_1 = require("../controllers/deployment.controller");
const router = express_1.default.Router();
router.get('/:id_deploy', deployment_controller_1.obtenerDeploy);
router.get('/', deployment_controller_1.obtenerDeploys);
router.post('/', deployment_controller_1.agregarDeploy);
router.put('/:id_deploy', deployment_controller_1.actualizarDeploy);
router.delete('/:id_deploy', deployment_controller_1.eliminarDeploy);
exports.default = router;
