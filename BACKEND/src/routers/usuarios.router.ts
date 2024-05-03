import express from 'express';
import {login, obtenerUsuario, obtenerUsuarios, agregarUsuario, actualizarUsuario, eliminarUsuario} from '../controllers/usuarios.controller';

const router = express.Router();

router.post('/login', login);

router.get('/:id_usuario', obtenerUsuario);

router.get('/', obtenerUsuarios);

router.post('/', agregarUsuario);

router.put('/:id_usuario', actualizarUsuario);

router.delete('/:id_usuario', eliminarUsuario);



export default router;


