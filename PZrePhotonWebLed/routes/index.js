﻿var express = require('express');
var router = express.Router();
var formidable = require('formidable');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'PZr Weather Station', webaction: 'no action so far' });
});
/*router.post('/onoff', function (req, res) {
   res.render('index', { title: 'PZr Weather Station', webaction: 'req.args' });
});
*/
/*
router.post("/onoff", function (req, res) {
    res.render('index', { title: 'PZr Weather Station', webaction: req.body.args });
});
*/

router.post('/onoff', function (req, res, next) {
    req.post({
        'url': 'https://api.particle.io/v1/devices/3f0034000447343138333038/led?access_token=b17ccb6f2996e593961f647fc8e796959a86d151',
        'headers': {
            'Content-Type': 'application/octet-stream',
        },
        'body': req.body
    },
        function (error, response, body) {
            body = JSON.parse(body);
            if (body.error) {
                console.log(body.error);
            }
            else {
                res.end();
            }
        }
    );
});


module.exports = router;