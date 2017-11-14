var express = require('express');
var router = express.Router();
var request = require('request');

var config = {
	order:'http://www.kuaidibiaoju.com/WxPost/data/lxj1996/getOrder',
	user:'http://www.kuaidibiaoju.com/WxPost/data/lxj1996/getUser',
	receiveOrder:'http://www.kuaidibiaoju.com/WxPost/data/lxj1996/getReceiveOrder'
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('order', { title: 'Express' });
});

router.get('/order', function(req, res, next) {
    res.render('order', { title: 'Express' });
});

router.get('/user', function(req, res, next) {
    res.render('user', { title: 'Express' });
});

router.get('/receiveOrder', function(req, res, next) {
    res.render('receiveOrder', { title: 'Express' });
});

router.get('/orderData', function(req, res, next) {
    request.get(config.order, function(error, response, body) {
        res.send(body);
    });
});

router.get('/userData', function(req, res, next) {
    request.get(config.user, function(error, response, body) {
        res.send(body);
    });
});

router.get('/receiveOrderData', function(req, res, next) {
    request.get(config.receiveOrder, function(error, response, body) {
        res.send(body);
    });
});

module.exports = router;