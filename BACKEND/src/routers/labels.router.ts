import express from 'express';
import {obtenerLabel, obtenerLabels, agregarLabel, actualizarLabel, eliminarLabel} from '../controllers/labels.controller';

const router = express.Router();

router.get('/:id_label', obtenerLabel);

router.get('/', obtenerLabels);

router.post('/', agregarLabel);

router.put('/:id_label', actualizarLabel);

router.delete('/:id_label', eliminarLabel);

export default router;