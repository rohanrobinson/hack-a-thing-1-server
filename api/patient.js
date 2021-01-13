const express = require('express');

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

module.exports = router;