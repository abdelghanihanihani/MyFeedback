var express=require('express');
var con=require('./router/connection');
var app=express();
var parser=require('body-parser');

var feedback=require('./router/feedback');
var survey=require('./router/survey');
var user=require('./router/user');
var employee=require('./router/employee');
var project=require('./router/project');
var test=require('./test');
// var cookieParser = require('cookie-parser');
// var session = require('express-session');
var port = process.env.PORT; // 2. Using process.env.PORT
// var sess;
app.set('port', port);
// app.use(cookieParser());
// app.use(session({secret: "Shh, its a secret!"}));
app.use("/feedback",feedback);
app.use("/survey",survey);
app.use("/user",user);
app.use("/employee",employee);
app.use("/project",project);
// app.use("/test",test);
app.use(parser.json()); // support json encoded bodies
app.use(parser.urlencoded({ extended: true }));
app.get("/",function(req,res){
    res.send("hello to E-feedback server");
    // sess=req.session;
    // sess.name="hiiiii";
    // res.send(sess.name);
})
// app.post('/login',function(req,res){
//     sql="select * from employee where login='"+req.body.login+"' and password='"+req.body.password+"'";
//     con.getConnection().query(sql,function(err,result){
//          if(result==0)
//          {
//           res.sendStatus(404);
//          }
//           else
//           {    sess=req.session;
//                       sess.ident=result[0].id.toString();
//              res.send(result[0].id.toString());
   
//        }
//          });
//      });

app.listen(port);
//  exports.getSession=function (){
//      return sess;
//  } 
//  exports.setSession=function (value){
//      sess.key=value;
// } 
