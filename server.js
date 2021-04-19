var mongoose = require ('mongoose');
var express = require('express');
//Node have this framework named as express that is used for the backend API
var cors = require('cors');
//CORS package in imported that helps when both frontend and backend run on the same machine then cors need to be handled
const bodyParser = require('body-parser');
//Bodyparser is used to parse the body of the frontend in required formate in our case its JSON
var user_schema = require('./model/regModel');
//Schema is imported from its root dir
require('dotenv').config();
//Configured the env variables
mongoose.connect(process.env.db_connect);
//give the database connection and database connection string from the env file
var app = express();
//Assign that express to variable that is used

app.use(bodyParser.json());
//allow JSON to parse the body
app.use(cors());
//Assign the cors to app that is the main variable
app.options('*', cors());
//Allow all request to get cors permission
app.post('/add',(req,res)=>{
    //Post request to add new record in database
    var myData = new user_schema(req.body);
    //myData get body of the request after varify it from the schema
    console.log(JSON.stringify(req.body));
    console.log("MY Data"+JSON.stringify(myData));
  myData.save()
  //its save the and if sucess then() will execute if failed then catch() will execute
    .then(item => {
      res.status(200).send("Item Saved");
    })
    .catch(err => {
        //generate error in case of any validation or connection problem
      res.status(400).send("unable to save to database");
    });
})

app.listen(4000,function(){
    //main line which make the server running and here 4000 is the port in which that is running
    console.log("Server Running")
});