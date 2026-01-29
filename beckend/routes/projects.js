const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM projects', (err, results) => {
        if(err) return res.status(500).json({error: err});
        res.json(results);
    });
});

router.post('/', (req, res) => {
    const { title, description, image_url, project_link } = req.body;
    const sql = 'INSERT INTO projects (title, description, image_url, project_link) VALUES (?, ?, ?, ?)';
    db.query(sql, [title, description, image_url, project_link], (err, result) => {
        if(err) return res.status(500).json({error: err});
        res.json({message: 'Project added!'});
    });
});

module.exports = router;
