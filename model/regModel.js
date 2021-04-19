const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regSchema = new Schema({
    name:String
})

var user_schema = mongoose.model('reg',regSchema,'test');

module.exports = user_schema;