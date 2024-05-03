import express from 'express';
import {obtenerBranch, obtenerBranchs, agregarBranch, actualizarBranch, eliminarBranch} from '../controllers/branch.controller';

const router = express.Router();

router.get('/:id_branch', obtenerBranch);

router.get('/', obtenerBranchs);

router.post('/', agregarBranch);

router.put('/:id_branch', actualizarBranch);

router.delete('/:id_branch', eliminarBranch);

export default router;