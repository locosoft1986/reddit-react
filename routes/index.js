var express = require('express');
var router = express.Router();
var path = require('path');

var Database = require('../database.js');

router.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../src', 'index.html'));
});

module.exports = router;
