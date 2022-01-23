import classes from './Events.module.css';
import Event from '../Event/Event';

const Events = () => {
  return (
    <div className={classes.events}>
      <Event />
      <Event />
      <Event />
    </div>
  )
};

export default Events;
