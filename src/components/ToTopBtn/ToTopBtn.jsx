import { BiUpArrowAlt } from 'react-icons/bi';
import classes from './ToTopBtn.module.css';

const ToTopBtn = () => {

  const backToTop = () => {
    
  }
  
  return (
    <BiUpArrowAlt className={classes.icon} onClick={backToTop} />
  );
};

export default ToTopBtn;
