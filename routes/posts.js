const express = require("express");
require('express');
const router =express.Router();
router.get('/', (req, res) => {
    res.send("posts List");
  
})
router.get('/new', (req, res) => {
        res.send('New post');
    })
module.exports = router; 
