import express from 'express';
import {obtenerEquipo, obtenerEquipos, agregarEquipo, actualizarEquipo, eliminarEquipo} from '../controllers/equipo.controller';

const router = express.Router();

router.get('/:id_equipo', obtenerEquipo);

router.get('/', obtenerEquipos);

router.post('/', agregarEquipo);

router.put('/:id_equipo', actualizarEquipo);

router.delete('/:id_equipo', eliminarEquipo);

export default router;