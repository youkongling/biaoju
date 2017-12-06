var express = require('express');
var router = express.Router();
var request = require('request');

var config = {
    order: 'http://www.kuaidibiaoju.com/WxPost/data/lxj1996/getOrder',
    user: 'http://www.kuaidibiaoju.com/WxPost/data/lxj1996/getUser',
    receiveOrder: 'http://www.kuaidibiaoju.com/WxPost/data/lxj1996/getReceiveOrder'
}

router.get('/', function(req, res, next) {
    var data = [];
    for (var i = 0; i < 10; i++) {
        var item = {
            name: '小波',
            tel: '15779423569',
            allow: true,
        };
        data.push(item);
    }
    res.render('person', { data: data });
});

router.post('/search', function(req, res, next) {
    var queryUser = req.body.queryUser;
    console.log(queryUser)
    var data = [];
    for (var i = 0; i < 10; i++) {
        var item = {
            name: '小波',
            tel: '15779423569',
            allow: true,
        };
        data.push(item);
    }
    res.render('person', { data: data });
});

module.exports = router;