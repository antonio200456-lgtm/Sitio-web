import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 
  if (!token) {
    return res.status(401).json({ error: 'Token requerido' });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido o expirado' });
    }
    req.user = decoded;
    next();
  });

};

    export const authenticateAdmin = (req, res, next) => {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) return res.status(401).json({ error: 'Token requerido' });
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        if (decoded.id_rol !== 1) return res.status(403).json({ error: 'No autorizado (solo admins)' });
        req.user = decoded;

        next();
      } catch (err) {
        res.status(401).json({ error: 'Token inválido' });
      }
    };


