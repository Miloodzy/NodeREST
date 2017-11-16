var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var Facture  = require('../models/Facture.js');

/****** GET ALL FACTURES *********/

router.get('/', function(req, res, next){
    
var util  = require('util'),
    spawn = require('spawn-command'),
    ls    = spawn('/tmp/AZ/script.sh miloud.saihia@gmail.com test 1'); // the second arg is the command 
    var num ;                                      // options
ls.stdout.on('data', function (data) {    // register one or more handlers
    //console.log(data.toString());
    num += data.toString();
    //num += data;
    //res.send(num);
});  
        
    res.send(num);
});
/**********************************/

router.post('/', function(req, res, next){
    Facture.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/**********************************/

module.exports = router;
