import { useState } from 'react';

import DateForm from '../DateForm/DateForm';
import Person from '../Person/Person';
import classes from './People.module.css';

const People = () => {

  const [people, setPeople] = useState([]);

  const listAllPeople = persons => {
    setPeople(persons);
  }

  return (
    <div className={classes.people}>
      <DateForm section='births' getPeople={listAllPeople} />
      <Person />
      <Person />
      <Person />
    </div>
  );
};

export default People;
