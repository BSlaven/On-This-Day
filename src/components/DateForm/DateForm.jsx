import { useEffect, useState } from 'react';

import classes from './DateForm.module.css';

const DateForm = ({ section, getData }) => {

  const [ day, setDay ] = useState('');
  const [ month, setMonth ] = useState('');
  const [ date, setDate ] = useState('');

  const dayInputHandler = e => {
    const value = e.target.value;
    setDate(value);
    const myDate = new Date(value);
    const myDay = myDate.getDate();
    const myMonth = myDate.getMonth() + 1;
    setDay(myDay);
    setMonth(myMonth);
  }

  const fetchData = async (day, month) => {
    const res = await fetch(`https://byabbe.se/on-this-day/${month}/${day}/${section}.json`);
    const data = await res.json();
    getData(data);
  }

  const btnClickHandler = () => {
    fetchData(day, month);
  }

  useEffect(() => {
    const newDate = new Date();
    const initDay = newDate.getDate();
    const initMonth = newDate.getMonth() + 1;
    fetchData(initDay, initMonth);
  }, [])

  return (
    <div className={classes.form}>
      <div className={classes.date}>
        <label htmlFor="day-input">Date</label>
        <input
          value={date || ''}
          onInput={dayInputHandler}
          type="date"
          name="day-input"
          id="day-input" />
      </div>
      <button onClick={btnClickHandler}>fetch</button>
    </div>
  );
};

export default DateForm;
