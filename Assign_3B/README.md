*Readme.md*

# Node.js CRUD Operations with MongoDB

This repository demonstrates how to perform CRUD (Create, Read, Update, Delete) operations using Node.js with MongoDB.

## Prerequisites

Before running the application, ensure you have the following installed:

1. [Postman](https://www.postman.com/)
2. [MongoDB Compass](https://www.mongodb.com/products/compass)
3. [MongoDB Community Server](https://www.mongodb.com/try/download/community)

## Installation

1. Initialize npm in your project directory:

```bash
npm init
```


2. Install required npm packages:

```bash
npm i mongodb express
```


## Setting Up MongoDB

1. Open MongoDB Compass and connect to your MongoDB server.
2. In the Compass terminal, execute the following commands:

```bash
show databases
use student
db.createCollection('profile')
db.profile.insertOne({name:'abc', email:'xyz@gmail.com', city:'pune'})
```


## MongoDB Configuration

Create a mongodb.js file and add the following content:

```bash
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "student";
const client = new MongoClient(url);

const dbConnect = async () => {
    const result = await client.connect();
    const db = await result.db(database);
    return db.collection('profile');
}

module.exports = dbConnect;
```


## Running the Application

1. Create an index.js file and add the following content:

```bash
const dbConnect = require('./mongodb');
const express = require('express');
const app = express();
app.use(express.json());

// READ (Get-API)
app.get('', async (req, res) => {
    let result = await dbConnect();
    result = await result.find().toArray();
    res.send(result);
});

// CREATE (Post-API)
app.post('/', async (req, res) => {
    let result = await dbConnect();
    result = await result.insertOne(req.body);
    res.send("Data Inserted Successfully");
});

// UPDATE (Put-API)
app.put('/:name', async (req, res) => {
    let result = await dbConnect();
    result = await result.updateOne({ name: req.params.name }, { $set: req.body });
    res.send("Data Updated Successfully");
});

// DELETE (Delete-API)
app.delete('/:name', async (req, res) => {
    let result = await dbConnect();
    result = await result.deleteOne({name:req.params.name});
    res.send("Data Deleted Successfully");
});

app.listen(3000);
console.log("Connected to DB");
```


2. Run the application:

```bash
node index.js
```


## Usage

Use Postman to perform CRUD operations:

- *GET:* Retrieve all profiles: GET http://localhost:3000
- *POST:* Insert a new profile: POST http://localhost:3000
- *PUT:* Update an existing profile: PUT http://localhost:3000/:name
- *DELETE:* Delete a profile: DELETE http://localhost:3000/:name

Replace :name with the name of the profile you want to update or delete.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
