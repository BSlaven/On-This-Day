import { BiUpArrowAlt } from 'react-icons/bi';
import classes from './ToTopBtn.module.css';

const ToTopBtn = ({ showButton }) => {

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <BiUpArrowAlt
      style={!showButton ? {display: 'none'} : {}}
      className={classes.icon}
      onClick={backToTop} />
  );
};

export default ToTopBtn;
