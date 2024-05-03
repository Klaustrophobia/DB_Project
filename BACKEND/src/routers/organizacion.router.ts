import express from 'express';
import {obtenerOrganizacion, obtenerOrganizaciones, agregarOrganizacion, actualizarOrganizacion, eliminarOrganizacion} from '../controllers/organizacion.controller';

const router = express.Router();

router.get('/:id_organizacion', obtenerOrganizacion);

router.get('/', obtenerOrganizaciones);

router.post('/', agregarOrganizacion);

router.put('/:id_organizacion', actualizarOrganizacion);

router.delete('/:id_organizacion', eliminarOrganizacion);

export default router;