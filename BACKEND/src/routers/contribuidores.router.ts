import express from 'express';
import {obtenerContribuidor, obtenerContribuidores, agregarContribuidor, actualizarContribuidor, eliminarContribuidor} from '../controllers/contribuidores.controller';

const router = express.Router();

router.get('/:id_contribuidor', obtenerContribuidor);

router.get('/', obtenerContribuidores);

router.post('/', agregarContribuidor);

router.put('/:id_contribuidor', actualizarContribuidor);

router.delete('/:id_contribuidor', eliminarContribuidor);

export default router;