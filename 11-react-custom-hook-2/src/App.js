import React, { useEffect, useState} from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './components/hooks/use-http';


// useCallback을 사용하고 싶지 않다면 transformTasks 함수를 useEffect안에 만들고, fetchTask의 두번째 매개변수에 transformTasks를 매개변수로 준다
// 이렇게 하면 use-http는 의존성이나 매개변수 없이 호출할 수 있다
// 요청에 대한 설정과 데이터 전송 후 적용되야할 데이터 변환을 직접 보내야 하기 때문이다
function App() {
  const [tasks, setTasks] = useState([]);

  // App　컴포넌트가 재평가될때마다 매번 재생성된다
  // useMemo를 사용해서 이 객체의 불변성을 증명해야한다
  // const {isLoading, error, sendRequest:fetchTasks } = useHttp(
  //   { url : "https://task-644e8-default-rtdb.firebaseio.com/tasks.json" },
  //   transformTasks
  // );

  const {isLoading, error, sendRequest:fetchTasks} = useHttp();

  useEffect(() => {
    const transformTasks = ((tasksObj)=> {
      const loadedTasks = [];
  
      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }
  
      setTasks(loadedTasks);
      
    });
    fetchTasks({url :  "https://task-644e8-default-rtdb.firebaseio.com/tasks.json"},transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
