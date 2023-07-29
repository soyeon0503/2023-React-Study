import { useState, useReducer } from "react";

const initialInputState = {
    value : '',
    isTouched : false
};

// create Reducer Function
const inputStateReducer = (state, action) => {
    if(action.type === 'INPUT'){
        return { value : action.value , isTouched : state.isTouched};
    }
    if(action.type === 'BLUR'){
        return {isTouched : true, value: state.value};
    }
    if(action.type === 'RESET'){
        return {isTouched : false, value: ''};
    }
    return inputStateReducer;
};

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;
    
    const valueChangeHandler = (event) => {
        dispatch({type: 'INPUT', value: event.target.value});
    };   

    const inputBlurHandler= () => {
        dispatch({type:'BLUR'})
    }; 

    const reset = () => {
        dispatch({type:'RESET'})
    };

    return {
        value : inputState.value, 
        isValid : valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;

// useReducer
// state를 관리하고 업데이트 하는 hook인 useState를 대체 할 수 있는 hook