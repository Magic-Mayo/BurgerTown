const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', (req,res)=>{
    burger.all((data)=>{
        const burgers = {
            burgers: data
        }
        // console.log(burgers);
        res.render('index', burgers);
    });
});

router.post('/burgers/new', (req,res)=>{
    burger.create('burger_name', req.body.newburger, (results)=>{
        res.redirect('/')
    })
});

router.put('/burgers/devour', (req,res)=>{
    console.log(req.body)
    // burger.update({devoured: req.body, req.body.id, (results)=>{
    //     console.log(results)
    //     res.redirect('/')
    // });
})

module.exports = router;