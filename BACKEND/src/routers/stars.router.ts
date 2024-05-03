import express from 'express';
import {obtenerStar, obtenerStars, agregarStar, actualizarStar, eliminarStar} from '../controllers/stars.controller';

const router = express.Router();

router.get('/:id_estrella', obtenerStar);

router.get('/', obtenerStars);

router.post('/', agregarStar);

router.put('/:id_estrella', actualizarStar);

router.delete('/:id_estrella', eliminarStar);

export default router;