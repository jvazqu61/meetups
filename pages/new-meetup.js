import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useRouter } from 'next/router';

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
        router.push('/');
    }

    return (
        <NewMeetupForm  onAddMeetup={addMeetupHandler} />
            
     
    );
}

export default NewMeetup;
