var con=require('./connection');
var express=require('express');
var parser=require('body-parser');
var urlEncoded=parser.urlencoded({extended:false});
var router=express.Router();
router.get('/allS',function(req,res){
    
    sql="select * from survey";
    con.getConnection().query(sql,function(err,result){
        res.send(JSON.stringify(result));
        });
    });
    router.post('/postS',urlEncoded,function(req,res){
        console.log(JSON.stringify(req.body));
        sql="INSERT INTO `survey`(`date`) VALUES ('"+req.body.date+"')";
        con.getConnection().query(sql,function(err,result){
            res.redirect("allS");
            });
        });
module.exports=router;