import express from 'express';
import {obtenerProyecto, obtenerProyectos, agregarProyecto, actualizarProyecto, eliminarProyecto} from '../controllers/proyectos.controller';

const router = express.Router();

router.get('/:id_proyecto', obtenerProyecto);

router.get('/', obtenerProyectos);

router.post('/', agregarProyecto);

router.put('/:id_proyecto', actualizarProyecto);

router.delete('/:id_proyecto', eliminarProyecto);

export default router;