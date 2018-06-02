var express = require('express');
var router = express.Router();

const { Subject }  = require('rxjs');
const fs = require('fs');
const url = require('url');


const subject = new Subject();

function readFile(reqres) {
    const url_parts = url.parse(reqres.req.url, true)
    const query = url_parts.query;
    const file = query.url;
    fs.createReadStream(file).pipe(reqres.res);
}

subject.subscribe(readFile);

/* GET home page. */
router.get('/', function(req, res, next) {
    subject.next({req: req, res: res});
});



module.exports = router;
