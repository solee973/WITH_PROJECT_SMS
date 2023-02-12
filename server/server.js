const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('./db_config_mysql');
//const actionLogin = require('./router/login');
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());


// 로그인 처리
app.post('/login', (req, res) => {
    console.log(req.body);
    
    mysql.getConnection((err,conn)=>{
        try{
            if(!err){
                const sql ='SELECT * FROM ps_member WHERE user_id = ? AND user_pw = ?';
                conn.query(sql, [req.body.userId, req.body.userPw], (error, rows, fields) => {
                    if (err) throw err;
                    if(rows != null) {
                        console.log('User info is: ', rows);
                        res.json({result:1});
                    } else {
                        res.json({result:0});
                    }
                });
            } else {
                throw err;
            }
        } catch(err){
            console.log(err);
            res.json({result:0});
        }
        
    });

}); 


app.listen(port, ()=>{
    console.log('listening on '+ port);
})
