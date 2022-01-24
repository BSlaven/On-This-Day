import classes from './DateForm.module.css';

const DateForm = () => {
  return (
    <div className={classes.form}>
      <div>
        <label htmlFor="day-input">Day</label>
        <input type="number" name="day-input" id="day-input" />
      </div>
      <div>
        <label htmlFor="month-input">Month</label>
        <input type="number" name="month-input" id="month-input" />
      </div>
      <button>fetch</button>
    </div>
  );
};

export default DateForm;
