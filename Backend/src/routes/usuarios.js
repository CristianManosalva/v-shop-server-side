import { Router } from 'express';
import { logUsuario, createUsuario, deleteUsuario, getOneUsuario, updateUsuario, listUsuarios } from '../controllers/dao.usuario';
const router = Router();

/*CRUD usuario*/
//Create user, requires body, return user || error
router.post('/create', createUsuario);
//Get all users, return users || null
router.get('/get', listUsuarios);
//Get one user, requires parameter id_usuario, return user || null
router.get('/get/:id_usuario', getOneUsuario);
//Update user, requires id:usuario, return 1 || 0
router.put('/update/:id_usuario', updateUsuario);
//Delete user requires id:usuario, return 1 || 0
router.delete('/delete/:id_usuario', deleteUsuario);

/*functions*/
//requires nick and pass, return tipo_usuarios || null
router.get('/login', logUsuario);





export default router;