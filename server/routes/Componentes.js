import { Router } from 'express';
import * as Comp from '../controllers/Componentes.js';
import { authenticateToken, authenticateAdmin } from '../middleware/Auth.js';
import upload from '../src/multerConfig.js';

const router = Router();

// Subir imagen
router.post('/:plantillas_id_plantilla/imagenes', authenticateToken, upload.single('imagen'),Comp.addImagenCompleta);
router.get('/:plantillas_id_plantilla/imagenes', Comp.VerImg);
router.patch('/imagenes/:id_imagen', authenticateToken, Comp.ActIma);
router.delete('/imagenes/:id_imagen', authenticateToken, Comp.eliminarIma);

export default router;
