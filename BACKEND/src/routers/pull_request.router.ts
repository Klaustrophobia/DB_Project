import express from 'express';
import {obtenerPull_request, obtenerPull_requests, agregarPull_request, actualizarPull_request, eliminarPull_request} from '../controllers/pull_request.controller';

const router = express.Router();

router.get('/:id_pull_request', obtenerPull_request);

router.get('/', obtenerPull_requests);

router.post('/', agregarPull_request);

router.put('/:id_pull_request', actualizarPull_request);

router.delete('/:id_pull_request', eliminarPull_request);

export default router;