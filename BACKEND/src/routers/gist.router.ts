import express from 'express';
import {obtenerGist, obtenerGists, agregarGist, actualizarGist, eliminarGist} from '../controllers/gist.controller';

const router = express.Router();

router.get('/:id_gist', obtenerGist);

router.get('/', obtenerGists);

router.post('/', agregarGist);

router.put('/:id_gist', actualizarGist);

router.delete('/:id_gist', eliminarGist);

export default router;