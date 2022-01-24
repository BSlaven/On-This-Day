import DateForm from '../DateForm/DateForm';
import classes from './Events.module.css';
import Event from '../Event/Event';

const Events = () => {
  return (
    <div className={classes.events}>
      <DateForm />
      <Event />
      <Event />
      <Event />
    </div>
  )
};

export default Events;
