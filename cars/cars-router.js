const express = require('express')

const db = require('../data/database')

const router = express.Router()

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json({ data: cars })
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

module.exports = router