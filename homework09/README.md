### Using the Aggregation Framework:
```
{ 
  "_id" : "01001", 
  "city" : "AGAWAM", 
  "loc" : [ -72.622739, 42.070206 ], 
  "pop" : 15338, 
  "state" : "MA" 
}

{ 
  "_id" : "01002", 
  "city" : "CUSHMAN", 
  "loc" : [ -72.51564999999999, 42.377017 ], 
  "pop" : 36963, 
  "state" : "MA" 
}
```

Import json to mongoDB:
```
mongoimport -d <dbName> -c <collectionName> file.json

mongoimport -d zdb -c zips zips.json
2018-06-06T19:26:28.576+0000    connected to: localhost
2018-06-06T19:26:28.811+0000    imported 29353 documents

mongo --host 127.0.0.1:27017
use zdb
show collections
```
Find all the zip codes in lowa state.
```
db.zips.find( { state: 'IA' }, { _id: 1 } ).pretty().length()  //922
db.zips.aggregate( [ 
  { $match: { state: 'IA' } },
  { $project: { _id: 0, zip_code: '$_id' } }
] )

// output:
{ "zip_code" : "50001" }
{ "zip_code" : "50002" }
{ "zip_code" : "50003" }
{ "zip_code" : "50005" }
{ "zip_code" : "50006" } 
...

// .toArray().length 
// output: 922
```
Find all the zip codes with a population less than 1000.
```
db.zips.aggregate( [ 
  { $match: { state: 'IA' } },
  { $match: { pop: { $lt: 1000 } } }, 
  { $project: { _id: 0, zip_code: '$_id' } }
] )

// output: 
{ "zip_code" : "50001" }
{ "zip_code" : "50005" }
{ "zip_code" : "50007" }
{ "zip_code" : "50008" }
{ "zip_code" : "50026" }
{ "zip_code" : "50027" }
...

// .toArray().length 
// output: 433
```
Find all cities that have more than one zip code, sort the results based by state and city name.
```
db.zips.aggregate( [
  { $group: { 
      _id: '$city', 
      zip_codes: { $addToSet: '$_id' },
      state: { $first: '$state' } 
    } 
  },
  { $match: { 'zip_codes.1': { $exists: true } } }, 
  { $sort: { state: 1, city: 1 } } 
] )

// output:
{ "_id" : "KETCHIKAN", "zip_codes" : [ "99950", "99901" ], "state" : "AK" }
{ "_id" : "WASILLA", "zip_codes" : [ "99687", "99654" ], "state" : "AK" }
{ "_id" : "VALLEY", "zip_codes" : [ "99181", "68064", "36854" ], "state" : "AL" }
{ "_id" : "PLANTERSVILLE", "zip_codes" : [ "38862", "77363", "36758" ], "state" : "AL" }
{ "_id" : "JONES", "zip_codes" : [ "73049", "71250", "49061", "36749" ], "state" : "AL" }
...

// .toArray().length 
// output: 3884
```
Display the least populated city in each state
```
db.zips.aggregate( [
  { $group: { 
      _id: '$state', 
      min_pop: { $min: '$pop' },
    } 
  } 
] )

db.zips.aggregate( [
  { $sort: { state: 1, pop: 1 } },
  { $group: {
      _id: '$state',
      min_pop: { $first: '$pop' }
    } 
  }
] )
```