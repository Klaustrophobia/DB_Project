import express from 'express';
import {obtenerCommit, obtenerCommits, agregarCommit, actualizarCommit, eliminarCommit} from '../controllers/commits.controller';

const router = express.Router();

router.get('/:id_commit', obtenerCommit);

router.get('/', obtenerCommits);

router.post('/', agregarCommit);

router.put('/:id_commit', actualizarCommit);

router.delete('/:id_commit', eliminarCommit);

export default router;