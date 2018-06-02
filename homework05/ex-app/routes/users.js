var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const Promise = require('promise');
const Rx = require('rxjs');

/* GET users listing. */
router.get('/', function (req, res, next) {

    // Solution 0: Normal
    /*
    fetch('http://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(json => res.send(json));
    */


    // Solution 1: Normal Promise
    // Promise
    const promise = new Promise((resolve, reject) => {
        fetch('http://jsonplaceholder.typicode.com/users/')
            .then(res => res.json())
            .then(json => {
                resolve(json);
            });
    });

    
    /*
    const fetchData = () => {
      return promise;
    };
    fetchData().then(json => res.send(json)).catch(error => res.send(error));
    */


    // Solution 2: Rx + Promise
    /*
    Rx.from(promise).subscribe((json) => {
            res.send(json);
        }, (error) => {
            res.send(error);
        }, () => {
            console.log("done");
        }
    );
    */


    // Solution 3: Async
    async function asyncFetchData() {
      await fetch('http://jsonplaceholder.typicode.com/users/')
        .then(result => result.json())
        .then(json => res.send(json));
    }
    asyncFetchData();


});

module.exports = router;
