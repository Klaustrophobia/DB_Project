import express from 'express';
import {obtenerConfig, obtenerConfigs, agregarConfig, actualizarConfig, eliminarConfig} from '../controllers/config.controller';

const router = express.Router();

router.get('/:id_configuracion', obtenerConfig);

router.get('/', obtenerConfigs);

router.post('/', agregarConfig);

router.put('/:id_configuracion', actualizarConfig);

router.delete('/:id_configuracion', eliminarConfig);

export default router;