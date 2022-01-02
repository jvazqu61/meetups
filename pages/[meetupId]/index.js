// import { getStaticProps } from "next";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import {MongoClient, ObjectId} from 'mongodb';
import MyHead from "../../components/layout/MyHead";

function MeetupDetails(props) {
    return (
        <>
            <MyHead 
                title={props.meetupData.title}
                description={props.meetupData.description}
            />
            <MeetupDetail 
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            /> 
        </>  
    )
}

export async function getStaticPaths(){
    const client = await MongoClient.connect(process.env.MONGO_DB);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, {_id:1}).toArray();
    client.close(); // close the connection
    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: {meetupId: meetup._id.toString()},
        }))
    }
}

export async function getStaticProps(context){
    //fetch data for a single meetup

    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect(process.env.MONGO_DB);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});
    client.close();
    return {
        props:{
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        }
    }
}

export default MeetupDetails;
