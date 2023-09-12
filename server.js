const express=require('express');
const mysql=require('mysql');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

app.use(bodyParser.json());

const db=mysql.createConnection({
  host:"localhost",
  user:'root',
  password:'root',
  database:'authentication'
});

db.connect(err=>{
  if(err){
    console.error("Database connection failed: "+err.stack);
    return;
  }
  console.log("connected to the database");
});
/*
app.post('/',(req,res)=>{
  console.log(req.body.email);
  console.log("hello");
  const {email,password,usertype}=req.body;
  const query='INSERT INTO login VALUES(?,?,?)';
  db.query(query,[email,password,usertype],(error,results)=>{
    if(error){
      console.error(error);
      res.send("Error inserting data");
    }else{
      console.log("data inserted successfully");
      res.send("data inserted successfully");
    }
  });
});
*/

app.post("/admin.html",function(req,res){
  console.log("read");
  res.send(req.body.email);
})


app.get("/",function(req,res){
  console.log(res.body.email);
  res.send("<h1>hello world</h1>");
});

app.listen(8080,function(){
  console.log("server is running at port 8080");
});
/*
app.post('/login',(req,res)=>{
  const {email,password,usertype}=req.body;
  const query='SELECT* FROM login WHERE email=? AND password=? AND usertype=?';
  db.query(query,[email,password,usertype],(err,results)=>{
    if(err){
      console.error(err);
      res.status(500),json({success:false,message:'An error occured'});
      return;
    }
    if(results.length===1){
      res.json({success:true});
      res.send('alert("Login successfully")');
    }else{
      res.json({success:false});
      res.send('alert("Login failed")'); 
    }
  })
})
*/