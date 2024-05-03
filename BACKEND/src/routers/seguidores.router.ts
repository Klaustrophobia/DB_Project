import express from 'express';
import {obtenerSeguidor, obtenerSeguidores, agregarSeguidor, eliminarSeguidor} from '../controllers/seguidores.controller';

const router = express.Router();

router.get('/:id_seguidor', obtenerSeguidor);

router.get('/', obtenerSeguidores);

router.post('/', agregarSeguidor);

router.delete('/:id_seguidor', eliminarSeguidor);

export default router;