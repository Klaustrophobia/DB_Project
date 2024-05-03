import express from 'express';
import {obtenerIssue, obtenerIssues, agregarIssue, actualizarIssue, eliminarIssue} from '../controllers/issues.controller';

const router = express.Router();

router.get('/:id_issues', obtenerIssue);

router.get('/', obtenerIssues);

router.post('/', agregarIssue);

router.put('/:id_issues', actualizarIssue);

router.delete('/:id_issues', eliminarIssue);

export default router;