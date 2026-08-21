import db from '../src/db.js';

export const verPaginas = async (req, res) => {
    const {slug} = req.params;

    try {
    // 1. Obtener página y plantilla
    const [pagina] = await db.execute(
      `SELECT * FROM pagina_evento WHERE slug_url = ?`,
      [slug]
    );

    if (!pagina.length) {
        return res.status(404).json({ error: 'Página no encontrada' });
    }

    res.json(pagina[0]);
    } catch (err) {
        console.error('Error obteniendo página:', err);
        res.status(500).json({ error: 'Error al obtener página' });
    }
};