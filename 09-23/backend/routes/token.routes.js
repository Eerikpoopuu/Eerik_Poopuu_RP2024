const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { check, validationResult } = require('express-validator');



router.get("/",(req,res) => {
    const token =jwt.sign({name :"eerik"}, "shh");
    res.send(token);
});


router.post("/",(req,res) => {
    const {token} = req.body;

    jwt.verify(token,"shh",function(err,decoded){
        if(err) return res.send(false);
        console.log(decoded);
        res.send(true);
    });
    })





module.exports = router;
