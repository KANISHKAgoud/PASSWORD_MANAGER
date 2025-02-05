const express = require('express')
require('dotenv').config()
const { MongoClient } = require('mongodb');
const { Connect } = require('vite');

const app = express()

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';


// console.log(process.env.MONGO_URL) // remove this after you've confirmed it is working
const port = 3000

client.connect()

app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('documents');
    const findResult = await collection.find({}).toArray();
  res.json(findResult)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})