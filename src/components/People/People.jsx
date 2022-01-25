import { useState } from 'react';

import DateForm from '../DateForm/DateForm';
import Person from '../Person/Person';
import classes from './People.module.css';

const People = () => {

  const [people, setPeople] = useState([]);

  const listAllPeople = persons => {
    console.log(persons.births);
    setPeople(persons);
  }

  return (
    <div className={classes.people}>
      <h3 className={classes.peopleTitle}>People born on this date</h3>
      <h4 className={classes.date}>({people.date})</h4>
      <DateForm section='births' getPeople={listAllPeople} />
      <Person />
      <Person />
      <Person />
    </div>
  );
};

export default People;
