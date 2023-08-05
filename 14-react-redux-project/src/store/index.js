// import { createStore, combineReducers} from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter : 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter +  action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        },
    }
});

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

const authSlice = createSlice({
    name : 'authentication',
    initialState: initialState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
});

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer},
});

export default store;
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// 여러개의 슬라이스가 있더라도 리덕스 저장소는 하나이기때문에 괜찮다