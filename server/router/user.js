var con=require('./connection');
var express=require('express');
var router=express.Router();
var parser=require('body-parser');
router.use(parser.json()); // support json encoded bodies
router.use(parser.urlencoded({ extended: true }));
router.get('/all',function(req,res){
    
    sql="select * from user";
    con.getConnection().query(sql,function(err,result){
        res.send(JSON.stringify(result));
    });
    });
router.post('/login',function(req,res){
    console.log(req.body);
    sql="select * from user where login='"+req.body.login+"' and password='"+req.body.password+"'";
    con.getConnection().query(sql,function(err,result){
         if(result==0)
         res.sendStatus(404);
         else
        res.send(JSON.stringify(result));
        });
    });
module.exports=router;