 // store a new meet to the db
 import { MongoClient } from 'mongodb';

 
 async function handler(req,res){
    if (req.method === 'POST'){ // only listens to POST request
  
        
        const data = req.body;
        const client = await MongoClient.connect(process.env.MONGO_DB);
        const db = client.db();
        
        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);
        client.close(); // close the db connection

        res.status(201).json({message: 'meetup inserted to db.'}) //success
    }

 }

 export default handler;