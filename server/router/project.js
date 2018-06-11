var con=require('./connection');
var express=require('express');
var router=express.Router();
router.get('/all',function(req,res){
    
    sql="select * from project ORDER BY name ASC";
    con.getConnection().query(sql,function(err,result){
        res.send(JSON.stringify(result));
    });
    });

module.exports=router;