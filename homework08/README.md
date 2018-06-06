### Exercise 1:
Import JSON to MongoDB:
```
mongoimport -d <dbName> -c <collectionName> file.json

mongoimport -d rdb -c restaurants restaurants.json
2018-06-05T19:26:28.576+0000    connected to: localhost
2018-06-05T19:26:28.811+0000    imported 3772 documents

mongo --host 127.0.0.1:27017
use rdb
show collections
```


Write a MongoDB query to display all the documents in the collection restaurants.

```
db.r.find( {} ).pretty()
```

Write a MongoDB query to display the fields restaurant id, name, district and cuisine for all the documents In tne collection restaurant.

```
db.r.find( {}, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 } ).pretty()
```

Write a MongoDB query to display the fields restaurant id, name, district and cuisine, but exclude the field _id for all the documents in the collection restaurant.

```
db.r.find( {}, { _id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1 } ).pretty()
```

Write a MongoDB query to display the fields restaurant id, name, district and zipcode, but exclude the field _id for all the documents in the collection restaurant.

```
db.r.find( {}, { _id: 0, restaurant_id: 1, name: 1, district: 1, zipcode: 1 } ).pretty()
```

Write a MongoDB query to display all the restaurant which is in the district Bronx.

```
db.r.find( { district: 'Bronx' } ).pretty()
```

Write a MongoDB query to display the first 5 restaurant which is In the district Bronx.

```
db.r.find( { district: 'Bronx' } ).limit(5).pretty()
```

Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are tn the district Bronx.

```
db.r.find( { district: 'Bronx' } ).skip(5).limit(5).pretty()
```

Write a MongoDB query to find the restaurants which locates in latitude value less than -95.754168.

```
db.r.find( { 'address.coord.0': { $lt: -95.754168 } } ).pretty()
```

Write a MongoDB query to find the restaurants that does not prepare any cuisine of American and their grade score more than 70 and latitude less than -65.754168.

```
db.r.find( { $and: [
  { 'address.coord.0': { $lt: -65.754168 } } ,
  { cuisine: { $ne: 'American' } },
  { 'grades': { $elemMatch: { score: { $gt: 70 } } } } ] } ).pretty()
```

Write a MongoDB query to find the restaurant Id, name, district and cuisine for those restaurants which contains Wil’ as first three letters for its name.
```
db.r.find( { name: /^Wil/}, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 } ).pretty()
// https://stackoverflow.com/a/23761146/2195426
```

Write a MongoDB query to find the restaurant Id, name, district and cuisine for those restaurants which contains ces. as Last three letters for its name.

```
db.r.find( { name: /ces$/}, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 } ).pretty()
```

Write a MongoDB query to find the restaurant Id, name, district and cuisine for those restaurants which contains Reg as three letters SsOMmewnere in its name.

```
db.r.find( { name: /Reg/}, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 } ).pretty()
```

Write a MongoDB query to find the restaurants which belongs to the district Bronx and prepared either American or Chinese dish.

```
db.r.find( { $and: [
  { 'district': 'Bronx' },
  { cuisine: { $in: [ 'American', 'Chinese' ] } } ] } ).pretty()
```

Write a MongoDB query to find the restaurant Id, name, district and cuisine for those restaurants which belongs to the district Staten isiand or Queens or Bronx or Brooklyn.

```
db.r.find( { district: { $in: [ 'Staten Island', 'Queens', 'Bronx', 'Brooklyn' ] } }, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 } ).pretty()
```

Write a MongoDB query to find the restaurant Id, name, district and cuisine for those restaurants which are not belonging to the district Staten Island or Queens or Bronx or Brooklyn.

```
db.r.find( { district: { $nin: [ 'Staten Island', 'Queens', 'Bronx', 'Brooklyn' ] } }, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 } ).pretty()
```

Write a MongoDB query to find the restaurant Id, name, district and cuisine for those restaurants which achieved a score wnich Is not more than 10.

```
db.r.find( { grades: { $elemMatch: { score: { $lt: 10 } } } } , { restaurant_id: 1, name: 1, district: 1, cuisine: 1 } ).pretty()
```

Write a MongoDB query to find the restaurant Id, name, address and geographical location for those restaurants where 2nd element of coord array contains a value which Is more than 42 and up to 52.

```
db.r.find( { 'address.coord.1': { $gt: 42, $lte: 52} } , { restaurant_id: 1, name: 1, address: 1, coord: 1 } ).pretty()
```

Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.

```
db.r.find().sort( { name: 1 } ).pretty()
db.r.find( {}, { name: 1, _id: 0 }).sort( { name: 1 } ).limit(10).pretty()
```

Write a MongoDB query to arrange the name of the restaurants in descending order along with all the columns.

```
db.r.find().sort( { name: -1 } ).pretty()
```

Write a MongoDB query to arrange the name of the cuisine in ascending order and for those same cuisine district should be in descending order.

```
db.r.find().sort( { cuisine: 1, district: -1 }).pretty()
db.r.find( {}, { cuisine: 1, district: 1, _id: 0 } ).sort( { cuisine: 1, district: -1 }).pretty()
```

Write a MongoDB query to Know whether all the addresses contains the street or not.

```
db.r.find( { 'address.street': { $exists: false } } ).length() === 0  // true means all addresses contains the street.
```

Write a MongoDB query which will select all documents in the restaurants collection where the coord field value is Double.

```
db.r.find( { 'address.coord': { $type: 'double' } } ).pretty()
```

Write a MongoDB query to find the restaurant name, district, longitude and latitude and cuisine for those restaurants which contains Madi as first three letters of its name.

```
db.r.find( { name: /^Mad/}, { restaurant_id: 1, name: 1, district: 1, cuisine: 1, 'address.coord': 1 } ).pretty()
```


### Exercise 2:

Revisit Homework 07 and write down your suggestions to tune your Library application performance. (Indexes)
Books have an ISBN number and are categorized by author and tagged by keywords to facilitate search
Books can be borrowed by students, so the librarian will be able to check all borrowed books and their return date so he may contact students who are late returning their DOOKS.

```
{
  _id: objectId(),
  isbn: 0,
  author: [
    { author_id: 0, author_name: '' },
    { author_id: 0, author_name: '' }],
  keywords: ['keyword1', 'keyword2'],
  borrowed_by: {student_id: 0, student_name: 'student1', email: 'student@mum.edu', borrow_date: Date, return_date: Date}

}

db.books.createIndex( { keywords: 1, isbn: 1 } );
db.books.createIndex( { author: 1, isbn: 1 } );

db.books.createIndex( { borrowed_by: 1 } );
```

### Exercise 3:
Write a Rest Express API that uses MongoDB to
Create/Read/Update/Delete location points. Location JSON object: { Name, category, location: [longitude, latitude |} Find some locations around MUM campus and use Postman to add them to your MongoDB collection. (Input and output must be tn JSON format).
Ada the necessary indexes to search the geospacial locations.
Write an API that will locate the nearest 3 points to your current location (lat: 41.017654, long: -91.9665342), your search criteria may include a mandatory category and an optional location name.
Note that Googie Maps will give you coordination as |Lat, Long}. While MongoDB requires coordination to be saved as |Long, Lat}

```
{
  "location_id": 1000,
  "name": "Fairfield High School",
  "type": "High School",
  "location": [-91.9573982, 41.0083105]
}

{
  "location_id": 1001,
  "name": "Library of MUM",
  "type": "University Library",
  "location": [-91.9709945, 41.0180544]
}

{
  "location_id": 1002,
  "name": "Everybody's Whole Foods",
  "type": "Natural Foods Store",
  "location": [-91.9668768, 41.0122531]
}

{
  "location_id": 1003,
  "name": "Fairfield Post Office",
  "type": "Post Office",
  "location": [-91.9775606, 41.018106]
}

{
  "location_id": 1004,
  "name": "McDonald's",
  "type": "Fast Food Restaurant",
  "location": [-91.9775606, 41.018106]
}

{
  "location_id": 1005,
  "name": "Walmart Supercenter",
  "type": "Department Store",
  "location": [-91.9953418, 41.0076953]
}
```

[map-app/routes/locations.js](map-app/routes/locations.js)
