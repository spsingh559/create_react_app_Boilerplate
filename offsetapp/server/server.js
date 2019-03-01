const express = require('express');
const app=express();
const HOST = "0.0.0.0";
const PORT =8080;
var mysql = require('mysql'); 

// sql connection 

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MyNewPass4!",
  insecureAuth : true,
  database : 'offset'
});



con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// app.get('/api/v1/login', (req,res)=>{
//     console.log('login api');
//     let user_id="boeing1@boeing.com";
//     let password="123";
//     con.query('SELECT * FROM user WHERE user_id ='+user_id+'&& password ='+ password, (error, results, fields)=>{
//         if (error) throw error;
//         console.log('result of query is', results);
//     })
// })

con.query('SELECT * FROM user', function (error, results, fields) {
    if (error)
        throw error;
console.log('inside select');
console.log(results);
    // results.forEach(result => {
    //     console.log(result);
    // });
});
// app.get('/', (req,res)=>{
//     res.json({
//         players:["Alice", "Bob", "Shyam","Hi"]
//     })
// });

let user_id="boeing1@boeing.com";
    let password="123";
    con.query('SELECT * FROM user WHERE user_id ='+user_id+'AND password ='+ password, (error, results, fields)=>{
        if (error) throw error;
        console.log('result of query is', results);
    })

app.listen(PORT,HOST);
console.log(`Running on ${PORT}`);