var express = require('express');
var router = express.Router();
var request = require('request');

var config = {
    getuser: 'http://www.kuaidibiaoju.com/WxPost/getuser',
    getenlist: 'http://www.kuaidibiaoju.com/WxPost/getenlist',
    chanen: 'http://www.kuaidibiaoju.com/WxPost/chanen',
    chanenin: 'http://www.kuaidibiaoju.com/WxPost/chanenin'
}

router.get('/', function(req, res, next) {
    request.get(config.getenlist, function(err, response, body) {
        var _body = JSON.parse(JSON.parse(body));
        console.log(_body);
        var data = [];
        for (var i = 0; i < _body.obj.length; i++) {
            var item = {
                name: _body.obj[i].name,
                tel: _body.obj[i].phoneNum,
                allow: _body.obj[i].enable,
                money: (_body.obj[i].creditScore == 666) ? false : true
            };
            data.push(item);
        }
        console.log(data)
        res.render('person', { data: data });
    });
});

router.post('/search', function(req, res, next) {
    var queryUser = req.body.queryUser;
    request.get(config.getuser + '?phonenum=' + queryUser, function(err, response, body) {
        var _body = JSON.parse(JSON.parse(body));
        console.log(_body);
        var data = [];
        for (var i = 0; i < 1; i++) {
            var item = {
                name: _body.obj.name,
                tel: queryUser,
                allow: _body.obj.enable,
                money: (_body.obj.creditScore == 666) ? false : true
            };
            data.push(item);
        }
        res.render('person', { data: data });
    });
});

router.post('/edit', function(req, res, next) {
    var phonenum = req.body.phonenum;
    // console.log(phonenum);
    request.get(config.chanen + '?phonenum=' + phonenum, function(err, response, body) {
        // console.log(body);
        var _body = JSON.parse(JSON.parse(body));
        console.log(_body);

        res.send("hello");
    });
});

router.post('/editIn', function(req, res, next) {
    var phonenum = req.body.phonenum;
    // console.log(phonenum);
    request.get(config.chanenin + '?phonenum=' + phonenum, function(err, response, body) {
        // console.log(body);
        var _body = JSON.parse(JSON.parse(body));
        console.log(_body);

        res.send("hello");
    });
});

module.exports = router;