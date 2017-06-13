const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

var companies;
var data = './test-data/companies.json';
fs.readFile(data, function (err, contents) {
    if(err){
        return console.error(err);
    }
    companies = contents.toString();
});

router.get('/', function (req, res) {
    // console.log(JSON.stringify(companies));
    res.header('Access-Control-Allow-Origin', "*");
    res.json(JSON.parse(companies));
});

module.exports = router;