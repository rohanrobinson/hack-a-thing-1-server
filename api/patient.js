const express = require('express');
const { NotExtended } = require('http-errors');

const router = express.Router();

const queries = require('../db/queries');

//below is executed when user routes to api/v1/patients
router.get('/', (req, res) => {
    queries
        .getAll()
        .then(patients => {
            res.json(patients);
        });
});

router.get('/:id', (req, res, next) => {
    
    
    //validate that a patients information using their id was correctly requested
    if (!isNaN(req.params.id)) {
        //get patient info from data using its id
        queries
            .getOne(req.params.id)
            .then(patient => {
                if (patient) {
                    res.json(patient);
                }
                else {
                    next();
                }
            })
    }

    else {
        const error = new Error('Invalid id');
        next(error);
    }
});

module.exports = router;