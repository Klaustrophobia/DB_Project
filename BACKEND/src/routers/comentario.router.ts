import express from 'express';
import {obtenerComentario, obtenerComentarios, agregarComentario, eliminarComentario} from '../controllers/comentario.controller';

const router = express.Router();

router.get('/:id_comentario', obtenerComentario);

router.get('/', obtenerComentarios);

router.post('/', agregarComentario);

router.delete('/:id_comentario', eliminarComentario);

export default router;