var mongoose = require ('mongoose');
var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
var user_schema = require('./model/regModel');
mongoose.connect('mongodb+srv://Jawad:Test123@cluster0.2zrro.mongodb.net/test')
var app = express();

// app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
app.post('/add',(req,res)=>{
    var myData = new user_schema(req.body);
    console.log(JSON.stringify(req.body));
    console.log("MY Data"+JSON.stringify(myData));
  myData.save()
    .then(item => {
    //   res.send(200,"item saved to database");
      res.status(200).send("Item Saved");
    })
    .catch(err => {
        //generate error in case of any validation or connection problem
      res.status(400).send("unable to save to database");
    });
})

app.listen(4000,function(){
    console.log("Server Running")
});