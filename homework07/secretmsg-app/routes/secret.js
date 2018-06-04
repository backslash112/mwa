var express = require('express');
var router = express.Router();
const crypto = require("crypto");
const Promise = require('promise');
const Rx = require('rxjs');


/* GET secret listing. */
router.get('/', function(req, res, next) {

  const fetchDataPromise = new Promise((resolve, reject) => {
    const MongoClient = require('mongodb').MongoClient;
    MongoClient.connect('mongodb://127.0.0.1:27017/test', (err, client) => {
      if(err) throw err;
      const db = client.db('test');
      db.collection('msgs').findOne({}, (err, doc) => {
        if(err) throw err;
        console.dir(doc);
        resolve(doc.message);
        client.close();
      });
    });
  });

  const decrypt = (encrypted) => {
    return new Promise((resolve, reject) => {
      const ALGO = 'aes256';
      const pk = 'asaadsaad';
      const decipher = crypto.createDecipher(ALGO, pk);
      let decrypted = '';
      decipher.on('readable', () => {
        const data = decipher.read();
        if (data)
        decrypted += data.toString('utf8');
      });
      decipher.on('end', () => {
        console.log(decrypted);
        resolve(decrypted);
      });
      decipher.write(encrypted, 'hex');
      decipher.end();
    });
  };

  Rx.from(fetchDataPromise).subscribe(encrypted => {
    decrypt(encrypted).then(decrypted => {
      res.send(decrypted)
      // Welcome to MongoDB Week :)
    });
  });
});

module.exports = router;
