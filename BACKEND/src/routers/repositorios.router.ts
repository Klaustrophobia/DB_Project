import express from 'express';
import {obtenerRepositorio, obtenerRepositorios, agregarRepositorio, actualizarRepositorio, eliminarRepositorio} from '../controllers/repositorios.controller';

const router = express.Router();

router.get('/:id_repositorio', obtenerRepositorio);

router.get('/', obtenerRepositorios);

router.post('/', agregarRepositorio);

router.put('/:id_repositorio', actualizarRepositorio);

router.delete('/:id_repositorio', eliminarRepositorio);

export default router;