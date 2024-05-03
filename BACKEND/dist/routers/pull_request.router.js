"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pull_request_controller_1 = require("../controllers/pull_request.controller");
const router = express_1.default.Router();
router.get('/:id_pull_request', pull_request_controller_1.obtenerPull_request);
router.get('/', pull_request_controller_1.obtenerPull_requests);
router.post('/', pull_request_controller_1.agregarPull_request);
router.put('/:id_pull_request', pull_request_controller_1.actualizarPull_request);
router.delete('/:id_pull_request', pull_request_controller_1.eliminarPull_request);
exports.default = router;
