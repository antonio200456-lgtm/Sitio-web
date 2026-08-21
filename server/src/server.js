import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import router from '../routes/usuarios.js';
import eventosRouter from '../routes/Eventos.js';
import plantillasRouter from '../routes/Plantillas.js';
import CompRouter from '../routes/Componentes.js';
import paginasRouter from '../routes/Paginas.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const PORT = process.env.PORTWEB || 3000;
app.use(cors());


app.use('/uploads', express.static(path.join(__dirname, '..', 'public', 'uploads')));
app.use('/', router);
app.use('/login', router);
app.use('/usuarios', router)
app.use('/registerUsers', router)
app.use('/eventos', eventosRouter);
app.use('/plantillas', plantillasRouter);
app.use('/componentes', CompRouter);
app.use('/pagina', paginasRouter);


app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});