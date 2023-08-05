// import { createStore, combineReducers} from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter';
import authReducer from './auth';

// 리덕스에서 리덕스로 임포트 할 수 있다
// const counterReducer = (state = initialState , action) => {
    
//     if(action.type === 'increment'){
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         };
//     }
//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         };
//     }
//     if(action.type==='increase'){
//         return{
//             counter : state.counter + action.amount,
//             showCounter: state.showCounter,
//         };
//     }
//     if(action.type === 'toggle'){
//         return{
//             counter : state.counter,
//             showCounter: !state.showCounter,
//         }
//     }
//     return state;
// };


const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer},
});

export default store;

// 여러개의 슬라이스가 있더라도 리덕스 저장소는 하나이기때문에 괜찮다