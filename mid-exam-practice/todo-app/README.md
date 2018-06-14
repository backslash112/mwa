
### mongoDB queries
```
mongo --host 127.0.0.1:27017

use todo;
show collections;

// insert
db.tasks.insert( {
  task: 'Prepare Exam Questions',
  status: false,
  create_date: new Date(),
  update_date: new Date() } )


// find all incomplete tasks
db.tasks.find( { status: false } )

// output:
{ "_id" : ObjectId("5b1ad729d323d84a78e541b2"), "task" : "Prepare Exam Questions",
"status" : false, "create_date" : ISODate("2018-06-08T19:21:13.348Z"),
"update_date" : ISODate("2018-06-08T19:21:13.348Z") }


// mark task as completed
db.tasks.update( { _id: ObjectId("5b1ad729d323d84a78e541b2") }, { $set: { status: true } } )
// output:
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
db.tasks.find()
{ "_id" : ObjectId("5b1ad729d323d84a78e541b2"), "task" : "Prepare Exam Questions",
"status" : true, "create_date" : ISODate("2018-06-08T19:21:13.348Z"),
"update_date" : ISODate("2018-06-08T19:21:13.348Z") }

// not
db.tasks.update( { _id: ObjectId("5b1ad729d323d84a78e541b2") }, { status: true } )
// output:
db.tasks.find()
{ "_id" : ObjectId("5b1ad729d323d84a78e541b2"), "status" : true }


// remove by task id
db.tasks.remove( { "_id" : ObjectId("5b1ad729d323d84a78e541b2") } )
WriteResult({ "nRemoved" : 1 })
```
