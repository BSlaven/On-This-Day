import classes from './Person.module.css'

const Person = () => {
  return (
    <div className={classes.card}>
      <h4 className={classes.name}>Slaven Bunijevac</h4>
      <p className={classes.description}>Amazing developer and tranlator</p>
      <button className={classes.more}>Learn more</button>
    </div>
  );
};

export default Person;
