const express = require('express');
const router = express.Router();

router.post('/handleCoordinates', (req, res) => {
  const { x, y } = req.body;
  res.json(x, y);
});

module.exports = router;
