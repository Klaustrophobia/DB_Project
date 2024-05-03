import express from 'express';
import {obtenerDiscussion, obtenerDiscussions, agregarDiscussion, actualizarDiscussion, eliminarDiscussion} from '../controllers/discussion.controller';

const router = express.Router();

router.get('/:id_discusion', obtenerDiscussion);

router.get('/', obtenerDiscussions);

router.post('/', agregarDiscussion);

router.put('/:id_discusion', actualizarDiscussion);

router.delete('/:id_discusion', eliminarDiscussion);

export default router;