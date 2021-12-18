const express = require('express');
const router = express.Router();

const Task = require('../models/task')

router.get('/', (req, res) => { 
    res.render('index', );
});

router.post('/add', (req, res) =>{
    const Task = new Task(req.body);
    await task.save();
    res.send('received');
});

module.exports = router;