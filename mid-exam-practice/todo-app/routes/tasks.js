var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  console.log('get incompleted tasks');
  req.tasks.find().toArray((err, items) => {
    if (err) throw err;
    res.render('tasks', items);
  });
});

module.exports = router;
