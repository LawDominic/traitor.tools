require('dotenv').config()

const express = require('express')
const cors = require('cors')
const axios = require('axios')
const { application } = require('express')
const router = express()

const { Collections } = require('../models/Collections')

router.use(cors())
router.use(express.static('build'))

router.post("/collections", (req, res) => {
    
    const body = req.body

    try {
        const newCollection = new Collections(body)
        newCollection.save(function(err, doc) {
            if (err) return console.error(err);
            console.log("Document inserted successfully!");
        });
    } catch (e) {
        console.log(e)
    }
})

export default router