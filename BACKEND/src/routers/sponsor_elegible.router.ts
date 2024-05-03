import express from 'express';
import {obtenerSponsor_elegible, obtenerSponsor_elegibles, agregarSponsor_elegible, actualizarSponsor_elegible, eliminarSponsor_elegible} from '../controllers/sponsor_elegible.controller';

const router = express.Router();

router.get('/:id_sponsor_elegible', obtenerSponsor_elegible);

router.get('/', obtenerSponsor_elegibles);

router.post('/', agregarSponsor_elegible);

router.put('/:id_sponsor_elegible', actualizarSponsor_elegible);

router.delete('/:id_sponsor_elegible', eliminarSponsor_elegible);

export default router;