import { getStaticProps } from "..";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail 
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJEhiDBfe7R4ekEAppHuxgJ9O7q1AnBpVLqA&usqp=CAU'
            title='first meetup'
            address='address goes here'
            description='description goes here'
        />
            
        
    )
}

export async function getStaticPaths(){
    return {
        fallback: false,
        paths: [
            { params: {
                meetupId:'m1',
            }}
        ]
    }
}

export async function getStaticProps(context){
    //fetch data for a single meetup

    const meetupId = context.params.meetupId;
    return {
        props:{
            meetupData: {
                image:'',
                id:meetupId,
                title:'',
                address:'',
                description:''

            }
        }
    }
}

export default MeetupDetails;
