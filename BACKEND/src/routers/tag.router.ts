import express from 'express';
import {obtenerTag, obtenerTags, agregarTag, actualizarTag, eliminarTag} from '../controllers/tag.controller';

const router = express.Router();

router.get('/:id_tag', obtenerTag);

router.get('/', obtenerTags);

router.post('/', agregarTag);

router.put('/:id_tag', actualizarTag);

router.delete('/:id_tag', eliminarTag);

export default router;