import {useState} from 'react'


const EventList = ({eventList}) => {

    const [events, setEvents] = useState(eventList)

const fetchSportEvents = async() => {

    const response = await fetch(`http://localhost:4000/events?category=sports`)

    const data = await response.json()

    setEvents(data)

}

return(
    <>

        <button onClick={fetchSportEvents}>Sport Events</button>

        <h1>List Of Events</h1>

        {   
            events.map(event => {

            return(
                
            <div key = {event.id}>

                <h2>
                    {event.id}  {event.title}   {event.date} | {event.category}

                    <p>{event.description}</p>

                </h2>

                <hr/>

        
            </div>

            )

            })
        }

    </>

)
}
export default EventList

export const getServerSideProps = async() => {

    const response = await fetch(`http://localhost:4000/events`)

    const data = await response.json()

    return {

        props : {

            eventList : data
    
        }

    }
   

}