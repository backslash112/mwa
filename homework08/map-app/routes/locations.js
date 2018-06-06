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
      console.log('resolve(doc)');
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
      resolve('success');
      client.close();
    })
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
    db.collection('locations').find({}, (err, doc) => {

    });
  });
};

/* GET location listing. */
router.get('/', function (req, res, next) {
  Rx.from(buildConnectionPromise).subscribe((client) => {
    fetchAll(client).then(doc => {
      console.log('got doc:' + doc);
      // console.dir(doc);
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
    })
  });

  res.json(grades);
});

/* Update for given location_id */
router.put('/:location_id', function (req, res, next) {
  const index = grades.findIndex(o => o.id == req.params.id);
  grades[index].name = req.body.name;
  grades[index].course = req.body.course;
  grades[index].grade = req.body.grade;
  res.json(grades[index]);
});

/* DELETE location by given location_id */
router.delete('/:location_id', function (req, res, next) {
  // grades.splice(grades.findIndex(o => o.id == req.params.id), 1);
  // res.json(grades);
  const locationId = req.params.location_id;
  Rx.from(buildConnectionPromise).subscribe((client) => {
    deleteByLocationId(client, location_id).then(msg => {
      res.send(msg);
    }, err => {
      rs.send(err);
    })
  });
});

module.exports = router;
