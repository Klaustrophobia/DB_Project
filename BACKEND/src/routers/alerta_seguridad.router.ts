import express from 'express';
import {obtenerAlerta, obtenerAlertas, agregarAlerta, actualizarAlerta, eliminarAlerta} from '../controllers/alerta_seguridad.controller';

const router = express.Router();

router.get('/:id_alerta', obtenerAlerta);

router.get('/', obtenerAlertas);

router.post('/', agregarAlerta);

router.put('/:id_alerta', actualizarAlerta);

router.delete('/:id_alerta', eliminarAlerta);

export default router;