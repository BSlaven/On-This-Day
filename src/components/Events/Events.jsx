import { useState } from 'react';

import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import DateForm from '../DateForm/DateForm';
import classes from './Events.module.css';
import Event from '../Event/Event';

const Events = () => {

  const [ eventsData, setEventsData ] = useState([]);
  const [ currentDate, setCurrentDate ] = useState('');
  const [ showLimit, setShowLimit ] = useState(10);

  const eventsToShow = eventsData.slice(0, showLimit)

  const listAllEvents = data => {
    setEventsData(data.events);
    setCurrentDate(data.date)
  }

  const loadMoreEvents = () => {
    setShowLimit(prev => prev + 10);
  }

  return (
    <div className={classes.events}>
      <h3 className={classes.eventsTitle}>Events on this date</h3>
      <h4 className={classes.date}>({currentDate})</h4>
      <DateForm section='events' getData={listAllEvents} />
      {eventsData && eventsToShow.map(event => <Event key={event.description} event={event} />)}
      {eventsData.length > eventsToShow.length && <LoadMoreBtn loadMore={loadMoreEvents} />}
    </div>
  )
};

export default Events;
