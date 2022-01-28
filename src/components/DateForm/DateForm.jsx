import { useEffect, useState } from 'react';

import classes from './DateForm.module.css';

const DateForm = ({ section, getData }) => {

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');

  const dayInputHandler = e => {
    const value = e.target.value.trim();
    console.log(value);
    // if(parseInt(value) < 1 || parseInt(value) > 31) return;
    // if(month == 2 && parseInt(value) > 29) return;
    // if((month == 6 || month == 4 || month == 9 || month == 11) && parseInt(value) > 30) return;
    setDay(value);
  }

  const monthInputHandler = e => {
    const value = e.target.value.trim();
    if (parseInt(value) < 1 || parseInt(value) > 12) return;
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
      <div className={classes.date}>
        <label htmlFor="day-input">Date</label>
        <input
          value={day || ''}
          onChange={dayInputHandler}
          type="date"
          name="day-input"
          id="day-input" />
      </div>
      <button onClick={btnClickHandler}>fetch</button>
    </div>
  );
};

export default DateForm;
