module.exports = model => async (req, res, next) => {
  const resource = await model.findOne({
    where: {
      id: req.params.id,
      userId: req.user.id
    }
  });
  
  if (!resource) {
    return res.status(403).json({ error: 'Access denied' });
  }
  
  next();
};