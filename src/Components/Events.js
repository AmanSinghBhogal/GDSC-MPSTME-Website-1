import React from 'react';
import styled from 'styled-components';
import EventCard from './EventCard';
import EventsDetail from './EventDetails';
import TeamTitle from './TeamTitle';
import Iframe from 'react-iframe';

const header = [
    {
        "name": "#30DaysOfCloud Leader-Board",
        "description": "Checkout our Leader Board for 30 Days of Goolge Cloud.",
        "img": '/images/Events/GCC30.jpg',
        "Date": "",
        "Time": "",
        "SiteName": 'Leader Board',
        "link": "https://gdscmpstme30daysofcloud.netlify.app/",
        "bkgclr": 'white',
        "isLeft": 'true',
        "bufferBtnName": '',
        "bufferBtnLink" : ''
    }
];

function Events()
{
    return(
        <Container>
            <TeamTitle TeamName ="Upcoming and Past Events" color="#4285F4"/>
            <EventCard event={header[0]}/>
            <EventCalendar>
                <Calendar>
                <Iframe id='calendar' 
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&showPrint=0&showTabs=1&showNav=1&showDate=1&showCalendars=1&showTz=0&showTitle=1&src=ZzQ3dm5lMTZvY2o4YTJycHFwbWx1Y2Y1aWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%239E69AF&color=%230B8043" style={{border: "0px"}} 
                width="100%" 
                height="100%" 
                frameborder="0" 
                scrolling="no" />
                </Calendar>
            </EventCalendar>
            {
                EventsDetail.map((event,index) => (
                    <EventCard event={event} key={index}/>
                ))
            }
            
        </Container>
    )
}

export default Events;

const Container = styled.div`
    
`;
const EventCalendar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2em 2em 2em;
    @media (max-width: 756px)
    {
        padding: 20px;
    }
`;

const Calendar = styled.div`
    height: 80vh;
    width: 55vw;
    @media (max-width: 500px)
    {
        width: 100%;
        height: 60vh;
    }
    Iframe{
        border-radius: 5px;
        padding: 5px;
        border: 1px solid white;  
        box-shadow: 0 0 12px 0 #9b9595;
    }
`;