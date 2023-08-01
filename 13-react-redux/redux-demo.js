const redux = require('redux');

// 저장소를 생성한다
// const store = redux.createStore();

// 저장소의 데이터 관리 -> 리듀서 함수에 의해 결정
// 리듀서 함수는 표준 자바스크립트 함수지만 리덕스 라이브러리에 의해 호출된다
// 항상 2개의 입력(상태와 액션)을 받고 새로운 상태의 객체를 리턴해야만 한다
// 리듀서 함수는 리덕스가 제공하는 입력을 취하고 예상된 결과를 내는 상태 객체를 생성하는 순수함수여야한다
const counterReducer = (state ={counter : 0}, action) =>{
    if(action.type === 'increment'){
        return{
            counter : state.counter + 1
        };
    }
    if(action.type === 'decrement'){
        return{
            counter : state.counter - 1
        };
    }
    return state;
};

// createStore함수 안에 넣어 함수를 만든다.
// 어떤 리듀서가 저장소를 변경하는지 저장소에게 알리는 작업이다
const store = redux.createStore(counterReducer);

// 저장소를 구독한 누군가와 발송할 수 있는 액션이 필요하다
const counterSubscriber = () =>{
    const latestState = store.getState();
    console.log(latestState);
};

// 구독함수
store.subscribe(counterSubscriber);

// 액션 발생 메소드 dispatch
store.dispatch({type : 'increment'});
// store.dispatch({type : 'decrement'});