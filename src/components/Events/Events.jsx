import { useState } from 'react';

import DateForm from '../DateForm/DateForm';
import classes from './Events.module.css';
import Event from '../Event/Event';

const Events = () => {

  const [eventsData, setEventsData] = useState([]);
  const [currentDate, setCurrentDate] = useState('');

  const listAllEvents = data => {
    setEventsData(data.events);
    setCurrentDate(data.date)
  }

  return (
    <div className={classes.events}>
      <h3 className={classes.eventsTitle}>Events on this date</h3>
      <h4 className={classes.date}>({currentDate})</h4>
      <DateForm section='events' getData={listAllEvents} />
      {eventsData && eventsData.map(event => <Event key={event.description} event={event} />)}
    </div>
  )
};

export default Events;
