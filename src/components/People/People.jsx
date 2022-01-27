import { useState } from 'react';

import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import DateForm from '../DateForm/DateForm';
import Person from '../Person/Person';
import classes from './People.module.css';

const People = () => {

  const [peopleData, setPeopleData] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  const [ showLimit, setShowLimit ] = useState(5);

  const listAllPeople = persons => {
    setPeopleData(persons.births);
    setCurrentDate(persons.date);
  }

  const loadMorePeople = () => {
    setShowLimit(prev => prev + 10 );
  }

  const peopleToShow = peopleData.slice(0, showLimit);

  return (
    <div className={classes.people}>
      <h3 className={classes.peopleTitle}>People born on this date</h3>
      <h4 className={classes.date}>({currentDate})</h4>
      <DateForm section='births' getData={listAllPeople} />
      {peopleData && peopleToShow.map(person => <Person key={person.description} person={person} />)}
      {peopleData.length > peopleToShow.length && <LoadMoreBtn loadMore={loadMorePeople} />}
    </div>
  );
};

export default People;
