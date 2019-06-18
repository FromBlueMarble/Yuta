var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/random', (req, res, next) => {
  const items = [ '大吉', '中吉', '末吉', '凶']
  const random = Math.floor(Math.random()*items.length)
  const item = {
    item: items[random]
  }
  res.json(item)
})

module.exports = router;