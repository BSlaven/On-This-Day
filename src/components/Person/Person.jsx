import classes from './Person.module.css'

const Person = ({ person }) => {

  const link = person.wikipedia[0].wikipedia;

  return (
    <div className={classes.card}>
      <h4 className={classes.name}>{person.year}</h4>
      <p className={classes.description}>{person.description}</p>
      <a href={link} target='_blank' className={classes.more}>Learn more...</a>
    </div>
  );
};

export default Person;
