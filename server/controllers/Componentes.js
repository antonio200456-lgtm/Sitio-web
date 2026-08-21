import db from '../src/db.js';

export const addImagenCompleta = async (req, res) => {
  const { plantillas_id_plantilla } = req.params;
  const { tipo, orden } = req.body;

  try {
    if (!req.file) {
      return res.status(400).json({ error: "No se subió ningún archivo" });
    }

    const [plantilla] = await db.execute(
      "SELECT id_plantilla FROM plantillas WHERE id_plantilla = ?",
      [plantillas_id_plantilla]
    );

    if (!plantilla.length) {
      return res.status(404).json({ error: "Plantilla no encontrada" });
    }

    const url_imagen = `/uploads/${req.file.filename}`;
    const alt_text = req.file.originalname.split(".")[0];

    const [imagenExistente] = await db.execute(
      `SELECT id_imagen FROM evento_imagenes 
       WHERE plantillas_id_plantilla = ? AND tipo = ?`,
      [plantillas_id_plantilla, tipo]
    );

    let id_imagen;

    // if (imagenExistente.length > 0) {
    //   await db.execute(
    //     `UPDATE evento_imagenes 
    //      SET url_imagen = ?, alt_text = ? 
    //      WHERE id_imagen = ?`,
    //     [url_imagen, alt_text, imagenExistente[0].id_imagen]
    //   );
    //   id_imagen = imagenExistente[0].id_imagen;

    if (tipo !== "galeria" && imagenExistente.length > 0) {

      await db.execute(
        `UPDATE evento_imagenes 
     SET url_imagen = ?, alt_text = ? 
     WHERE id_imagen = ?`,
        [url_imagen, alt_text, imagenExistente[0].id_imagen]
      );

      id_imagen = imagenExistente[0].id_imagen;

    } else {
      const [result] = await db.execute(
        `INSERT INTO evento_imagenes 
         (plantillas_id_plantilla, url_imagen, alt_text, tipo, orden) 
         VALUES (?, ?, ?, ?, ?)`,
        [
          plantillas_id_plantilla,
          url_imagen,
          alt_text || null,
          tipo || null,
          orden || 0
        ]
      );
      id_imagen = result.insertId;
    }

    res.status(201).json({
      message: "Imagen guardada correctamente",
      id_imagen: id_imagen,
      url: url_imagen,
      filename: req.file.filename,
      size: req.file.size
    });

  } catch (err) {
    console.error("Error guardando imagen:", err);
    res.status(500).json({ error: err.message });
  }
};

// Obtener imágenes de una plantilla
export const VerImg = async (req, res) => {
  const { plantillas_id_plantilla } = req.params;

  try {
    const [imagenes] = await db.execute(
      `SELECT id_imagen, url_imagen, alt_text, tipo, orden 
       FROM evento_imagenes 
       WHERE plantillas_id_plantilla = ? 
       ORDER BY tipo, orden`,
      [plantillas_id_plantilla]
    );

    // Organizar por tipo
    const imagenesPorTipo = {
      portada: [],
      galeria: [],
      fondo: [],
      logo: []
    };

    imagenes.forEach(img => {
      if (imagenesPorTipo[img.tipo]) {
        imagenesPorTipo[img.tipo].push(img);
      }
    });

    res.json(imagenesPorTipo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};


// Actualizar imagen
export const ActIma = async (req, res) => {
  const { id_imagen } = req.params;
  const { url_imagen, alt_text, tipo, orden } = req.body;

  try {
    const updates = [];
    const values = [];

    if (url_imagen) { updates.push('url_imagen = ?'); values.push(url_imagen); }
    if (alt_text) { updates.push('alt_text = ?'); values.push(alt_text); }
    if (tipo) { updates.push('tipo = ?'); values.push(tipo); }
    if (orden !== undefined) { updates.push('orden = ?'); values.push(orden); }

    if (updates.length === 0) {
      return res.status(400).json({ error: 'No hay datos para actualizar' });
    }

    values.push(id_imagen);

    await db.execute(
      `UPDATE evento_imagenes SET ${updates.join(', ')} WHERE id_imagen = ?`,
      values
    );

    res.json({ message: 'Imagen actualizada correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Eliminar imagen
export const eliminarIma = async (req, res) => {
  const { id_imagen } = req.params;

  try {
    const [result] = await db.execute(
      'DELETE FROM evento_imagenes WHERE id_imagen = ?',
      [id_imagen]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Imagen no encontrada' });
    }

    res.json({ message: 'Imagen eliminada correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const verComponentes = async (req, res) => {
  const { plantillas_id_plantilla } = req.params;

  try {
    const [componentes] = await db.execute(
      'SELECT id_componente, tipo_componente, contenido, orden FROM componentes WHERE plantillas_id_plantilla = ? ORDER BY orden',
      [plantillas_id_plantilla]
    );
    res.json(componentes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
