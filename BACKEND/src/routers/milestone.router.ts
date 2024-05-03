import express from 'express';
import {obtenerMilestone, obtenerMilestones, agregarMilestone, actualizarMilestone, eliminarMilestone} from '../controllers/milestone.controller';

const router = express.Router();

router.get('/:id_milestone', obtenerMilestone);

router.get('/', obtenerMilestones);

router.post('/', agregarMilestone);

router.put('/:id_milestone', actualizarMilestone);

router.delete('/:id_milestone', eliminarMilestone);

export default router;