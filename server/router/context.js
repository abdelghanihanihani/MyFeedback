var con=require('./connexion');
var express=require('express');
var parser=require('body-parser');
var urlEncoded=parser.urlencoded({extended:false});
var router=express.Router();

module.exports=router;