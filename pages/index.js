import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import MyHead from '../components/layout/MyHead';

function Home(props) {
    
    return (
        <>
            <MyHead 
                title="Meet ups"
                description="find local meetups around you!"
            />
            <MeetupList meetups={props.meetups}/>
        </>
    )
};

// runs for every incoming request
// export async function getServerSideProps(context) {
    
//     return ({
//         props:{}
//     })
// };

export async function getStaticProps(){
    const client = await MongoClient.connect(process.env.MONGO_DB);
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close(); // close the connection to the db

    return {
        props:{
            meetups:meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id:meetup._id.toString(),
            }))
        },
        revalidate: 1 //seconds to update the site
    };
}
export default Home
