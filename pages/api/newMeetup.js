 // store a new meet to the db
 import { MongoClient } from 'mongodb';
 
 async function handler(req,res){
    if (req.method === 'POST'){ // only listens to POST request
        const data = req.body;
        const client = await MongoClient.connect('mongodb+srv://meetupUser:ImVN7AojTs3mhOFi@project-logs.8abx8.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);
        client.close(); // close the db connection

        res.status(201).json({message: 'meetup inserted to db.'}) //success
    }

 }

 export default handler;