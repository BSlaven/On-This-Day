import classes from './Event.module.css';

const Event = () => {
  return (
    <div className={classes.card}>
      <h4 className={classes.year}>1985</h4>
      <p className={classes.description}>Amazing developer and translator</p>
      <a href='#' className={classes.more}>Learn more...</a>
    </div>
  );
};

export default Event;
