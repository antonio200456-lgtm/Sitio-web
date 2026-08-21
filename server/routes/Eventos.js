import { Router } from 'express';
import * as eventos from '../controllers/Eventos.js';
import { authenticateToken, authenticateAdmin } from '../middleware/Auth.js';

const router = Router();

router.post('/crear', authenticateToken, eventos.crearEvento);
router.get('/ver', authenticateToken, eventos.verEventos);
router.patch('/toggle/:id', authenticateAdmin, eventos.toggleEvento);
router.patch('/editar/:id', authenticateToken, eventos.editarEvento);

export default router;
