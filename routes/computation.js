var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const x= req.query.x || getRandomArbitrary(0, 60);
  var a1 = Math.atan2(x);
  var a2 = Math.atanh(x);
  var a3 = Math.cbrt(x);
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  res.send(`Math.atan2(${x}) is ${a1} ; Math.atanh(${x}) is ${a2} ; Math.cbrt(${x}) is ${a3}\n`);
});

module.exports = router;