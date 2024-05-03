import express from 'express';
import {obtenerDiscuss_coment, obtenerDiscuss_coments, agregarDiscuss_coment, actualizarDiscuss_coment, eliminarDiscuss_coment} from '../controllers/discuss_coment.controller';

const router = express.Router();

router.get('/:id_comentario', obtenerDiscuss_coment);

router.get('/', obtenerDiscuss_coments);

router.post('/', agregarDiscuss_coment);

router.put('/:id_comentario', actualizarDiscuss_coment);

router.delete('/:id_comentario', eliminarDiscuss_coment);

export default router;