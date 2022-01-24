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
            res.json({
                tasks: {
                    data: rows
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                tasks: {
                    error: "Error getting tasks"
                }
            })
        });

});


router.get('/:id', async (req, res, next) => {
    const id = req.params.id;

    if (isNaN(req.params.id)) {
        res.status(400).json({
            task: {
                error: 'Bad request'
            }
        });
    } else {
        res.json({
            id: req.params.id
        })
    }

    console.log(id);
    res.json({
        id: req.params.id
    })
});
    
module.exports = router;