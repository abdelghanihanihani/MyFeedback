var express=require('express');
var index=require('./index');
  // var session=index.getSession();
var router=express.Router();
router.get('/all',function(req,res){
  if(index.getSession())
  
    res.send('hello  '+index.getSession().name);
    else
    res.send('is not connected');
})
module.exports=router;