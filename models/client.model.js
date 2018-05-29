var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    name : { type: String, required: true }
});

// the schema is useless so far
// we need to create a model using it
var Client = mongoose.model('Client', ClientSchema);

// make this available to Node applications
module.exports = Client;