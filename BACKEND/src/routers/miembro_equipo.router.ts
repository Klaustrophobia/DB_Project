import express from 'express';
import {obtenerMiembro_equipo, obtenerMiembro_equipos, agregarMiembro_equipo, actualizarMiembro_equipo, eliminarMiembro_equipo} from '../controllers/miembro_equipo.controller';

const router = express.Router();

router.get('/:id_miembro', obtenerMiembro_equipo);

router.get('/', obtenerMiembro_equipos);

router.post('/', agregarMiembro_equipo);

router.put('/:id_miembro', actualizarMiembro_equipo);

router.delete('/:id_miembro', eliminarMiembro_equipo);

export default router;
