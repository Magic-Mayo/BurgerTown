const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', (req,res)=>{
    burger.all((data)=>{
        const burgers = {
            burgers: data
        }
        console.log(burgers);
        res.render('index', burgers);
    });
})

module.exports = router;