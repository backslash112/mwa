### Question 1:
Create a NoSQL design model for an application to manage a library, taking into consideration the following requirements:
* Books have an ISBN number and are categorized by author and tagged by keywords to facilitate search
* Books can be borrowed by students, so the librarian will be able to check all borrowed books and their return date so he may contact students who are late returning their books.

book:
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
```

### Question 2:
1. Using Mongo Shell, Create a collection homework7 and add one document to it with the following data.
2. Write a Node application using Express that will read the above message from MongoDB, decrypt the message (use crypto), It’s encrypted with `aes256` algorithm and the following key: `asaadsaad`
3. Display the decrypted message in the browser using route (/secret).

```
{message: "ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03"}
```
