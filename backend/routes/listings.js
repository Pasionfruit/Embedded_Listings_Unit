const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/listings', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM listings');
        res.status(200).json(result.rows); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router; 
