const mongoose = require('mongoose');
//import the mongoose package to use in the project
const Schema = mongoose.Schema;
//get its Schema to define the scheme in project

const regSchema = new Schema({
    name:String
})

var user_schema = mongoose.model('reg',regSchema,'test');
//here regSchema is the schema that is define and test is the document name in database in other words table name

module.exports = user_schema;