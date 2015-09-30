var mongoose = require('mongoose');

var url = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://127.0.0.1:27017/';

mongoose.connect(url + 'mcq');

// define your model here

/*
var Test = mongoose.model('Paper', {
    title: String,
    count: Number,
    defaultLength: Number,
    specialLength: Object
});
*/

/*
module.exports = {
    Paper: Paper
};
*/
