// http custom hook
// hook의 재사용성을 높이기 위해서 requestConfig 객체를 매개변수로 받는다.
// requestConfig 객체 안에는 데이터 베이스 url, method type 등 헤더에 포함될 데이터들이 들어있다
// 데이터 처리하는 과정은 각 컴포넌트에서 요구하는게 제각각이기 때문에
// applyData 매개변수에 데이터 처리하는 함수를 넣어서 받는다
// url나 요청 메서드가 변경되었을 때만 함수를 재 생성하여 동작한다

import { useState, useCallback } from "react";

const useHttp = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
            requestConfig.url,
            {
                method : requestConfig.method ? requestConfig.method : "GET",
                headers : requestConfig.headers ? requestConfig.headers : {},
                body : requestConfig.body ? JSON.stringify(requestConfig.body) : null
            }
          );
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
        applyData(data);
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },[]);

    return {
        isLoading : isLoading,
        error : error,
        sendRequest : sendRequest
    };
};

export default useHttp;