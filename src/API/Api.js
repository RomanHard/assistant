const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectID, ServerApiVersion } = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://romeenice:4598104asd@cluster.xycmu4l.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

client.connect().then(() => {
  console.log("Connected to MongoDB...");

  app.use(function(req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);
      next();
  });

  app.post('/saveData', async (req, res) => {
    try {
      const database = client.db('assistant');
      const collection = database.collection('zinger');

      const dataToSave = req.body;
      const result = await collection.insertOne(dataToSave);

      res.status(200).json({ message: `Data was saved with id: ${result.insertedId}` });
    } catch (err) {
      console.error(err);
      res.status(500).send('An error occurred while trying to save data');
    }
  });

  const PORT = process.env.PORT || 1727;
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

  app.get('/getData', async (req, res) => {
      try {
        const database = client.db('assistant');
        const collection = database.collection('zinger');
    
        const data = await collection.find().toArray();
    
        res.json(data);
      } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while retrieving data');
      }
  });

//   app.delete('/deleteCategory/:id', async (req, res) => {
//     try {
//       const { id } = req.params;
//       const database = client.db('assistant');
//       const collection = database.collection('zinger');

//       // Assuming the id is in MongoDB's ObjectID format
//       const result = await collection.deleteOne({ _id: new ObjectID(id) });
//       if (result.deletedCount === 1) {
//         res.status(200).json({ message: "Successfully deleted category" });
//       } else {
//         res.status(404).json({ message: "Category not found" });
//       }
//     } catch (err) {
//       console.error(err);
//       res.status(500).send(error.message);
//     }
//   });

// }).catch(err => {
//   console.log("Error connecting to MongoDB: ", err);
});


   app.delete('/deleteCategory/:id', async (req, res) => {
    res.send({ message: "hello" });
      //  console.log(req)
      //   const { id } = req.params;
      //   const database = client.db('assistant');
      //   const collection = database.collection('zinger');
  
      //   const result = await collection.deleteOne({ _id: new ObjectID(id) });
      //   // if (result.deletedCount === 1) {
        //   res.status(200).json({ message: "Successfully deleted category" });
        // } else {
        //   res.status(404).json({ message: "Category not found" });
        // }
    });
