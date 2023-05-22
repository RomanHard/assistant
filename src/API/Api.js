import 'esm';
import express from 'express';
import cors from 'cors';

const express = require('express');
const app = express();
app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://romeenice:4598104asd@cluster.xycmu4l.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  app.use(cors());
app.post('/saveData', async (req, res) => {
  try {
    // Connect the client to the server
    await client.connect();

    const database = client.db('assistant');
    const collection = database.collection('zinger');

    const dataToSave = req.body;
    const result = await collection.insertOne(dataToSave);

    res.status(200).json({ message: `Data was saved with id: ${result.insertedId}` });
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while trying to save data');
  } finally {
    await client.close();
  }
});

const PORT = process.env.PORT || 1727;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.get('/getData', async (req, res) => {
    try {
      await client.connect();
  
      const database = client.db('assistant');
      const collection = database.collection('zinger');
  
      const data = await collection.find().toArray();
  
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).send('An error occurred while retrieving data');
    } finally {
      await client.close();
    }
  });
  