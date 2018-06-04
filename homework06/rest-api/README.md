### Question:
Create an Express application that implements a Rest API for an entity called grades:
[{ id: 1, name: 'Asaad Saad', course: 'CS572', grade: 95}]
Handle all CRUD operations and use the proper HTTP verbs to make it
RESTful (GET, POST, PUT, and DELETE) — Test with Postman
Mimic your model grade as a Class with Array data structure.
Your API accepts/return JSON data
Log all requests to the console using a middleware (morgan) Make sure you validate that certain fields are valid and not empty Accept cross domain XHR requests to your API

- HTTP GET grades/  // Get all grades
- HTTP GET grades/{id}  // Get device for given id
- HTTP POST grades/  // Create new grade
- HTTP PUT grades/{id}  // Update grade for given id
- HTTP DELETE grades/{id}  // Delete grade for given id
