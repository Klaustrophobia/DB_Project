import express from 'express';
import {obtenerFile, obtenerFiles, agregarFile, actualizarFile, eliminarFile} from '../controllers/file.controller';

const router = express.Router();

router.get('/:id_file', obtenerFile);

router.get('/', obtenerFiles);

router.post('/', agregarFile);

router.put('/:id_file', actualizarFile);

router.delete('/:id_file', eliminarFile);

export default router;