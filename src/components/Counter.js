import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state=> state.counter.showCounter)
  
  function incrementHandler(){
    dispatch(counterActions.increment())
  }

  function increase(){
    dispatch(counterActions.increase(5)) 
  }

  function decrementHandler(){
    dispatch(counterActions.decrement()) 
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler} className={classes['counter-button']}>increment</button>
        <button onClick={increase} className={classes['counter-button']}>increase by 5</button>
        <button onClick={decrementHandler} className={classes['counter-button']}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
