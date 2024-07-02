const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

router.post('/handle_coordinates', (req, res) => {
    res.json('works')
});

/* Controller functions */

// Handle coordinates

const coordinates_check = asyncHandler(async (req, res, next) => {
    res.json('works');
});

module.exports = router;
 



