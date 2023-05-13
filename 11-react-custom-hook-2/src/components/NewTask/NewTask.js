import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../hooks/use-http";

// NewTask에서는 무한루프가 발생하지 않는다
// 폼을 전송할 때만 요청되기 때문이다

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "https://task-644e8-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      // 바인드 메서드는 함수를 사전에 구성하기 위해 사용할 수 있다.
      // 바인드 메서드가 보내는 첫번째 인자는 실행할 함수에서 this 예약어를 사용하게 하는 것인데 지금은 필요없다
      // 두번째 인자는 호출 예정인 함수가 받는 첫번째 인자가 된다

      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
