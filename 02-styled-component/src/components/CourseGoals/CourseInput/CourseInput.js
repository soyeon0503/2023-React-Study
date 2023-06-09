import React, { useState } from "react";

import Button from "../../UI/Button/Button";
// import styled from "styled-components";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color : ${props => (props.invalid ? 'red' : 'black')};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${ props => (props.invalid ? 'red' : '#ccc')};
//     background : ${ props => (props.invalid ? 'pink' : '#ccc')}
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isValid &&'invalid'}> */}
      {/* <FormControl invalid={!isValid}> */}
      {/* 하이픈이 들어간 경우 대괄호로를 사용하고 따옴표로 클래스 이름을 감사주면 사용가능 */}
      <div className = {`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}>
       
      </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
