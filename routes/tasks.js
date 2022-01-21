const express = require('express');
const router = express.Router();
const pool = require('../database');

/* 
    BASE URL / tasks
    GET / - get all tasks
    POST / - create a new task
    GET /:id - get a task by id
    PUT /:id - update a task by id
    DELETE /:id - delete a task by id

*/
router.get('/', async (req, res, next) => {
    await pool.promise()
        .query('SELECT * FROM tasks')
        .then(([rows, fields]) => {
            console.log(rows);
            res.json(rows);
        });

});

module.exports = router;