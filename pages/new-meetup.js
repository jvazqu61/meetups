import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useRouter } from 'next/router';
import MyHead from '../components/layout/MyHead';

function NewMeetup() {
    const router = useRouter();

    async function addMeetupHandler(formMeetupData){
        const response = await fetch('/api/newMeetup',{
            method:'POST',
            body:JSON.stringify(formMeetupData),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        router.push('/'); // redirect to homepage once new meetup is added
    }

    return (
        <>
            <MyHead 
                title="Add new meetup"
                description="start a new meetup by creating one!"
            />
            <NewMeetupForm  onAddMeetup={addMeetupHandler} />
        </> 
     
    );
}

export default NewMeetup;
