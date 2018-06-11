var mysql=require('mysql');
var pool = mysql.createPool({
    host     : 'db4free.net',
    port     :  3306,
    user     : 'haniabdelghani',
    password : 'hanihani',
    database : 'efeedback',
});

exports.getConnection=function(){
        return pool;
} 