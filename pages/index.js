import MeetupList from '../components/meetups/MeetupList';


function Home(props) {
    
    return (
        <MeetupList meetups={props.meetups}/>
           
    )
};

// runs for every incoming request
// export async function getServerSideProps(context) {
    
//     return ({
//         props:{}
//     })
// };

export async function getStaticProps(){
    return {
        props:{
            meetups:[]
        },
        revalidate: 1 //seconds to update the site
    };
}
export default Home
