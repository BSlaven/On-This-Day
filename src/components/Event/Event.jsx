import classes from './Event.module.css';

const Event = ({ event }) => {

  const link = event.wikipedia[0].wikipedia;

  return (
    <div className={classes.card}>
      <h4 className={classes.year}>{event.year}</h4>
      <p className={classes.description}>{event.description}</p>
      <a
        href={link}
        target='_blank'
        rel="noopener noreferrer nofollow"
        className={classes.more}>
        Learn more...
      </a>
    </div>
  );
};

export default Event;
