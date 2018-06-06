var express = require('express');
const {check, validationResult} = require('express-validator/check');

var router = express.Router();
const Promise = require('promise');
const Rx = require('rxjs');


const buildConnectionPromise = new Promise((resolve, reject) => {
  console.log('buildConnectionPromise:');
  const MongoClient = require('mongodb').MongoClient;
  MongoClient.connect('mongodb://127.0.0.1:27017/map', (err, client) => {
    if (err) {
      reject(err);
    }
    console.log('resolve(client)');
    resolve(client);
    //client.close();
  });
});

const fetchAll = (client) => {
  console.log('fetchAll');
  return new Promise((resolve, reject) => {
    const db = client.db('map');
    db.collection('locations').find({}).toArray((err, doc) => {
      if (err) {
        reject(err);
      }
      resolve(doc);
      client.close();
    });
  });
};


const fetchByLocationName = (client, locationName) => {
  return new Promise((resolve, reject) => {
    const db = client.db('map');
    db.collection('locations').find({'name': locationName}).toArray((err, doc) => {
      if (err) {
        reject(err);
      }
      resolve(doc);
      client.close();
    });
  });
};

const createNewLocation = (client, location) => {
  return new Promise((resolve, reject) => {
    const db = client.db('map');
    db.collection('locations').insertOne(location, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve('insert success');
      client.close();
    })
  });
};

const updateLocation = (client, location_id, location) => {
  return new Promise((resolve, reject) => {
    const db = client.db('map');
    const query = { location_id: location_id };
    const values = { $set: location };
    db.collection('locations').updateOne(query, values, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve('update success');
      client.close();
    });
  });
};

const deleteByLocationId = (client, locationId) => {
  return new Promise((resolve, reject) => {
    const db = client.db('map');
    db.collection('locations').deleteOne({ location_id: locationId }, (err, doc) => {
        if (err) {
          reject(err);
        }
        resolve('success');
        client.close();
    });
  });
}

const nearestLocations = (client) => {
  return new Promise((resolve, reject) => {
    const db = client.db('map');
    db.collection('locations').createIndex({ location: '2d' });
    db.collection('locations').find({ location: { $near: [41.017654, -91.9665342] }}, (err, doc) => {
     if (err) {
       reject(err);
     }
     resolve(doc);
     client.close();
   }).limit(3);
  });
};

/* GET location listing. */
router.get('/', function (req, res, next) {
  Rx.from(buildConnectionPromise).subscribe((client) => {
    fetchAll(client).then(doc => {
      console.log('got doc:' + doc);
      res.json(doc);
    });
  });
});

/* GET location by given name */
router.get('/:name', function (req, res, next) {
  console.log('get by name')
  const locationName = req.params.name;
  console.log(locationName);
  Rx.from(buildConnectionPromise).subscribe((client) => {
    fetchByLocationName(client, locationName).then(doc => {
      console.log('got doc:' + doc);
      // console.dir(doc);
      res.json(doc);
    }, err => {
      console.log(err);
    });
  });
});

router.get('/:nearest', function (req, res, next) {
  console.log('get nearest');
  Rx.from(buildConnectionPromise).subscribe(client => {
    nearestLocations(client).then(doc => {
      res.json(doc);
    }, err => {
      console.log(err);
    });
  });
});

/* POST to create a new location */
router.post('/', [
  check('location_id', 'location id is requied!').exists(),
  check('name', 'name is required!').exists(),
  check('type', 'type is required!').exists(),
  check('location', 'location is required!').exists()
], function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({errors: errors.array()});
  }
  const newLocation = {
    location_id: req.body.location_id,
    name: req.body.name,
    type: req.body.type,
    location: req.body.location
  };
  // grades.push(newLocation);
  Rx.from(buildConnectionPromise).subscribe(client => {
    createNewLocation(client, newLocation).then(msg => {
      res.send(msg);
    }, err => {
      res.send(err);
    });
  });
});

/* Update */
router.put('/:location_id', function (req, res, next) {
  const location_id = req.params.location_id;
  const location = {
    name: req.body.name,
    type: req.body.type,
    location: req.body.location
  };
  Rx.from(buildConnectionPromise).subscribe((client) => {
    updateLocation(client, location_id, location).then(msg => {
      res.send(msg);
    }, err => {
      res.send(err);
    });
  });
});

/* DELETE location by given location_id */
router.delete('/:location_id', function (req, res, next) {
  const locationId = req.params.location_id;
  Rx.from(buildConnectionPromise).subscribe((client) => {
    deleteByLocationId(client, location_id).then(msg => {
      res.send(msg);
    }, err => {
      rs.send(err);
    });
  });
});

module.exports = router;
