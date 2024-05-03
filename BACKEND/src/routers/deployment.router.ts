import express from 'express';
import {obtenerDeploy, obtenerDeploys, agregarDeploy, actualizarDeploy, eliminarDeploy} from '../controllers/deployment.controller';

const router = express.Router();

router.get('/:id_deploy', obtenerDeploy);

router.get('/', obtenerDeploys);

router.post('/', agregarDeploy);

router.put('/:id_deploy', actualizarDeploy);

router.delete('/:id_deploy', eliminarDeploy);

export default router;