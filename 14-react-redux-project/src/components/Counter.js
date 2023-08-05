import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {
  // useSelector를 이용해서 저장소가 관리하는 데이터에 엑세스할 수 있다
  // 이 함수를 호출하고, 이 useSelector에 함수를 넣어줘야한다
  // 넣은 함수는 리덕스가 관리하는 상태를 받고, 우리가 추출하련느 상태 부분을 리턴해야한다
  const counter = useSelector((state) => state.counter);
  // useDispatch 훅을 사용하여 dispatch function을 반환한다
  // redux store에 대한 action을 보낸다
  const dispatch = useDispatch();
  const show = useSelector(state => state.showCounter);
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase By 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// 리덕스가 기존의 state를 대체하는데 사용하는 객체는 새 snapshot를 반홚야한다
// 이 값은 기존의 state와 병합되지 않고 기존 state를 덮어쓰는 것이다
// 리덕스를 사용할 때는 기존의 state를 변형해서는 안된다 
// 새로운 state 객체를 반환하여 항상 재정의 한다

// 이런 실수로 인해 오류를 내지 않기 위해 우리는 리덕스 툴킷이라는 패키지를 사용한다