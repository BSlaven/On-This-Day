import classes from './Person.module.css'

const Person = () => {
  return (
    <div className={classes.card}>
      <h4 className={classes.name}>Slaven Bunijevac</h4>
      <p className={classes.description}>Amazing developer and translator</p>
      <a className={classes.more}>Learn more...</a>
    </div>
  );
};

export default Person;
