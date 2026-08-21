import { Router } from 'express';
import * as plantillas from '../controllers/Plantillas.js';
import { authenticateToken, authenticateAdmin } from '../middleware/Auth.js';

const router = Router();

router.get('/', authenticateToken, plantillas.verPlantillas);
router.get('/vista/:id', authenticateToken, plantillas.verUnaPlantilla);
router.delete('/:id', authenticateAdmin, plantillas.VaciarUnaPlantilla);
router.patch('/:id/estructura', authenticateToken, plantillas.Actualizar);

export default router;