var con=require('./connection');
var md5 = require('md5');
//var index=require('../index');
 var express=require('express');
 var parser=require('body-parser');
 var router=express.Router();
 router.use(parser.json()); // support json encoded bodies
 router.use(parser.urlencoded({ extended: true }));
//  router.get('/getsess',function(req,res){
//      index.setSession('hanihani');
//     if(index.getSession())
    
//         res.send('hello  '+index.getSession().key);
//         else
//      res.send('is not connected');
    
//  })

 router.get('/all',function(req,res){
    
     sql="select * from feedback";
     con.getConnection().query(sql,function(err,result){
         res.send(JSON.stringify(result));
         });
     });
     router.get('/allFE',function(req,res){
        
         sql="select feedback.* from feedback,feedbackTargets where  feedback.id=feedbackTargets.id_f and feedback.contextType='Employee' and feedbackTargets.id_e="+req.query.id;
         con.getConnection().query(sql,function(err,result){
             res.send(JSON.stringify(result));
             });
         });
         router.get('/allFP',function(req,res){
            
             sql="select feedback.* from feedback,feedbackTargets where  feedback.id=feedbackTargets.id_f and feedback.contextType='Project' and feedbackTargets.id_e="+req.query.id;
             con.getConnection().query(sql,function(err,result){
                 res.send(JSON.stringify(result));
                 });
             });
             router.get('/allFO',function(req,res){
                
                 sql="select feedback.* from feedback,feedbackTargets where  feedback.id=feedbackTargets.id_f and feedback.contextType='Other' and feedbackTargets.id_e="+req.query.id;
                 con.getConnection().query(sql,function(err,result){
                     res.send(JSON.stringify(result));
                     });
                 });
             router.get('/allFD',function(req,res){
                
                 sql="select feedback.* from feedback,feedbackTargets where  feedback.id=feedbackTargets.id_f and feedback.date='"+req.query.date+"' and feedbackTargets.id_e="+req.query.id;
                 con.getConnection().query(sql,function(err,result){
                     res.send(JSON.stringify(result));
                     });
                 });

     // router.get('/add',function(req,res){
     // sql="INSERT INTO `feedback`(`context`, `type`, `fashion`,`value`) VALUES ('"+req.query.context+"','"+req.query.type+"','"+req.query.fashion+"','"+req.query.value+"')";
   
    
//     // con.getConnection().query(sql,function(err,result){
//     //     res.redirect("all");
//     //     console.log("this"+JSON.stringify(req.query));
//     // })
//     // })
 router.post('/addT',function(req,body){
    var sql="INSERT INTO `feedbackTargets` (`id_f`,`id_e`) VALUES ('"+req.body.id_f+"',"+req.body.id_e+")" ;
                       con.getConnection().query(sql2,function(err,result){
                        if(err)
                         {res.sendStatus(404);}
                         else{res.redirect("all");}
                       })
 })
 router.post('/add',function(req,res){
    
    // res.send(JSON.stringify(req.body.feedback.context));
      sql="INSERT INTO `feedback`(`id`,`contextType`,`context`, `type`, `mode`,`value`,`date`) VALUES ('"+md5(req.body.value)+"','"+req.body.contextType+"','"+req.body.context+"','"+req.body.type+"','"+req.body.mode+"','"+req.body.value+"','"+req.body.date+"')";
        con.getConnection().query(sql,function(err,result){
            if(err)
            {res.sendStatus(404);}

            else
            {
                var list=new Array();
                list=req.body.targets;
                 for(let i=0;i<list.length;i++)
                {var sql2="INSERT INTO `feedbackTargets` (`id_f`,`id_e`) VALUES ('"+md5(req.body.value)+"','"+list[i]+"')" ;
                 con.getConnection().query(sql2,function(err,result){
                                         if(err)
                                         {res.sendStatus(404);}
                                         else{
                                        
                                         res.redirect('all');
                                            //res.send(req.body.targets);
                                         }
                                      })
                }
                                    
                 //res.redirect("all");
         //   res.sendStatus(200); 
            
            }
             });
         });
    // router.post('/add',function(req,res){
        
    //     // res.send(JSON.stringify(req.body.feedback.context));
    //       sql="INSERT INTO `feedback`(`id`,`contextType`,`context`, `type`, `mode`,`value`,`date`) VALUES ('"+md5(req.body.feedback.value)+"','"+req.body.feedback.contextType+"','"+req.body.feedback.context+"','"+req.body.feedback.type+"','"+req.body.feedback.mode+"','"+req.body.feedback.value+"','"+req.body.feedback.date+"')";
    //         con.getConnection().query(sql,function(err,result){
    //             if(err)
    //             {res.sendStatus(404);}

    //             else{
    //                 var sql2="INSERT INTO `feedbackTargets` (`id_f`,`id_e`) VALUES ('"+md5(req.body.feedback.value)+"',"+req.body.id_e+")" ;
    //                                    con.getConnection().query(sql2,function(err,result){
    //                                      if(err)
    //                                      {res.sendStatus(404);}
    //                                      else if(req.body.feedback.mode!='Private'){
    //                                         var list=new Array();
    //                                         list=req.body.feedback.targets;
    //                                          for(let i=0;i<list.length;i++)
    //                                          {var sql3="INSERT INTO `feedbackTargets` (`id_f`,`id_e`) VALUES ('"+md5(req.body.feedback.value)+"','"+list[i]+"')" ;
    //                                          con.getConnection().query(sql3,function(err,result){
    //                                                                  if(err)
    //                                                                  {res.sendStatus(404);}
    //                                                                  else{
    //                                                                     res.send(req.body.feedback.targets);
    //                                                                  }
    //                                                               })
    //                                                             }
                                                                
    //                                          //res.redirect("all");
    //                                  //   res.sendStatus(200); 
    //                                     }
    //                                     else{res.send(req.body.feedback.targets);}
    //                                    })

                
    //             }
    //              });
    //          });
//            
        
  
    
   
          
    //  router.delete("/delete",function(req,res){
    //      sql="DELETE FROM `feedback` ";
    //      con.getConnection().query(sql,function(err,result){
          
    //          res.redirect("all");
    //      })
    //  })     
// //     router.put("/update",urlEncoded,function(req,res){
// //         console.log(JSON.stringify(req.body));
// // sql="UPDATE `feedback` SET `context`='"+req.body.context+"',`type`='"+req.body.type+"',`mode`='"+req.body.mode+"' ,`value`='"+req.body.value+"'WHERE `id`="+req.body.id;
// // con.getConnection().query(sql,function(err,result){
// //     res.redirect("all");
// // })


//     // })

     module.exports=router;
    
