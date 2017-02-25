var express = require('express');
var router = express.Router();
var fs = require('fs');
var superagent = require('superagent');
var cheerio = require('cheerio');
var axios = require('axios');
var http = require('http'); 
var events = require('events');
var mongoose =require('mongoose')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Backtest' });
});


router.get("/trade",function(req,res,next){
  var username=req.query.username;
  var password=req.query.password;
  var variety=req.query.variety;
  var bidCode=req.query.bidCode;
  var bidPrice=req.query.bidPrice;
  var bidTime=req.query.bidTime;
  var bidAmount=req.query.bidAmount;
  var bidTowards=req.query.bidTowards;
});




module.exports = router;
 