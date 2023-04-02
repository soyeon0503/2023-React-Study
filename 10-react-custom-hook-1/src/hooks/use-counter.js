import { useState, useEffect } from "react";

const useCounter = (flag = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(flag){
                setCounter((prevCounter) => prevCounter + 1);
            }else{
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);
    
        return () => clearInterval(interval);
      }, [flag]);
    
    return counter;
};

export default useCounter;

// custom hook 명명 규칙 : 이름은 use로 시작할 것
// 그래야 리액트가 훅이구나 하고 인식함
