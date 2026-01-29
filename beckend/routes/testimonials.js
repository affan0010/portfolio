const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM testimonials', (err, results) => {
        if(err) return res.status(500).json({error: err});
        res.json(results);
    });
});

router.post('/', (req, res) => {
    const { name, message } = req.body;
    const sql = 'INSERT INTO testimonials (name, message) VALUES (?, ?)';
    db.query(sql, [name, message], (err, result) => {
        if(err) return res.status(500).json({error: err});
        res.json({message: 'Testimonial added!'});
    });
});

module.exports = router;
