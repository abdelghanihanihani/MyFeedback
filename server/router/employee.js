var con=require('./connection');
var express=require('express');
var router=express.Router();
var parser=require('body-parser');
//var cookieParser = require('cookie-parser');
// var session = require('express-session');
// var sess;
router.use(parser.json()); // support json encoded bodies
router.use(parser.urlencoded({ extended: true }));
// router.use(cookieParser());
// router.use(session({secret: "Shh, its a secret!"}));
router.get('/all',function(req,res){
    
    sql="select * from employee where id!="+req.query.id+" ORDER BY firstname ASC";
    con.getConnection().query(sql,function(err,result){
        res.send(JSON.stringify(result));
    });
    });
    // router.post('/login',function(req,res){
    //     if(req.session.page_views){
    //         req.session.page_views++;
    //         res.send("You visited this page " + req.session.page_views + " times");
    //      } else {
    //         req.session.page_views = 1;
    //         res.send("Welcome to this page for the first time!");
    //      }
    //     });
     router.post('/login',function(req,res){
          console.log(req.body);
          sql="select * from employee where login='"+req.body.login+"' and password='"+req.body.password+"'";
         con.getConnection().query(sql,function(err,result){
              if(result==0)
              {
               res.sendStatus(404);
              }
               else
               {//res.send(result[0].id.toString());
                   res.send(result[0]);
 
            }
              });
          });
        //   exports.getSession=function (){
        //     return 'hello';
        // } 
module.exports=router;