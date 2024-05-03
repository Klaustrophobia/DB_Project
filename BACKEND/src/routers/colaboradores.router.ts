import express from 'express';
import {obtenerColaborador, obtenerColaboradores, agregarColaborador, actualizarColaborador, eliminarColaborador} from '../controllers/colaboradores.controller';

const router = express.Router();

router.get('/:id_colaborador', obtenerColaborador);

router.get('/', obtenerColaboradores);

router.post('/', agregarColaborador);

router.put('/:id_colaborador', actualizarColaborador);

router.delete('/:id_colaborador', eliminarColaborador);

export default router;