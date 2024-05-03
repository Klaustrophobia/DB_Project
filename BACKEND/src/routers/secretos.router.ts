import express from 'express';
import {obtenerSecreto, obtenerSecretos, agregarSecreto, actualizarSecreto, eliminarSecreto} from '../controllers/secretos.controller';

const router = express.Router();

router.get('/:id_secrets', obtenerSecreto);

router.get('/', obtenerSecretos);

router.post('/', agregarSecreto);

router.put('/:id_secrets', actualizarSecreto);

router.delete('/:id_secrets', eliminarSecreto);

export default router;