const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Error del servidor';
  console.log(err);
  
  res.status(status).json({ error: message });
}

module.exports = errorHandler;