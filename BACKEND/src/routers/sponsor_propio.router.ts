import express from 'express';
import {obtenerSponsor_propio, obtenerSponsor_propios, agregarSponsor_propio, actualizarSponsor_propio, eliminarSponsor_propio} from '../controllers/sponsor_propio.controller';

const router = express.Router();

router.get('/:id_sponsor_propio', obtenerSponsor_propio);

router.get('/', obtenerSponsor_propios);

router.post('/', agregarSponsor_propio);

router.put('/:id_sponsor_propio', actualizarSponsor_propio);

router.delete('/:id_sponsor_propio', eliminarSponsor_propio);

export default router;

