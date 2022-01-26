import { useEffect, useState } from 'react';

import classes from './DateForm.module.css';

const DateForm = ({ section, getData }) => {

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');

  const dayInputHandler = e => {
    const value = e.target.value.trim();
    if (parseInt(value) < 1) return setDay(1);
    setDay(value);
  }

  const monthInputHandler = e => {
    const value = e.target.value.trim();
    if (parseInt(value) < 1) return setMonth(1);
    setMonth(value);
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
