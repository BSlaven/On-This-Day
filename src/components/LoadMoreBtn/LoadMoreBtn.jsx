import classes from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ loadMore }) => {
  return (
    <button className={classes.loadBtn} onClick={loadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;