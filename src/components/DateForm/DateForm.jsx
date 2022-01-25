import { useEffect, useState } from 'react';

import classes from './DateForm.module.css';

const DateForm = ({ section, getPeople }) => {

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');

  const dayInputHandler = e => {
    const value = e.target.value.trim();
    setDay(value);
  }

  const monthInputHandler = e => {
    const value = e.target.value.trim();
    setMonth(value);
  }

  const fetchBirths = async () => {
    const res = await fetch(`https://byabbe.se/on-this-day/${month}/${day}/${section}.json`);
    const data = await res.json();
    console.log(data);
  }

  const btnClickHandler = () => {
    console.log('day: ', day);
    console.log('month: ', month);
    fetchBirths();
  }

  return (
    <div className={classes.form}>
      <div>
        <label htmlFor="day-input">Day</label>
        <input
          value={day || ''}
          onChange={dayInputHandler}
          type="number"
          name="day-input"
          id="day-input" />
      </div>
      <div>
        <label htmlFor="month-input">Month</label>
        <input
          value={month || ''}
          onChange={monthInputHandler}
          type="number"
          name="month-input"
          id="month-input" />
      </div>
      <button onClick={btnClickHandler}>fetch</button>
    </div>
  );
};

export default DateForm;
