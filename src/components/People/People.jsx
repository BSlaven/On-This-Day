import DateForm from '../DateForm/DateForm';
import Person from '../Person/Person';
import classes from './People.module.css';

const People = () => {

  return (
    <div className={classes.people}>
      <DateForm />
      <Person />
      <Person />
      <Person />
    </div>
  );
};

export default People;
