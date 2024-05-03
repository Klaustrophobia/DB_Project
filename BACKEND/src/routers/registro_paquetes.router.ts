import express from 'express';
import {obtenerRegistro_paquete, obtenerRegistro_paquetes, agregarRegistro_paquete, actualizarRegistro_paquete, eliminarRegistro_paquete} from '../controllers/registro_paquetes.controller';

const router = express.Router();

router.get('/:id_registro', obtenerRegistro_paquete);

router.get('/', obtenerRegistro_paquetes);

router.post('/', agregarRegistro_paquete);

router.put('/:id_registro', actualizarRegistro_paquete);

router.delete('/:id_registro', eliminarRegistro_paquete);

export default router;