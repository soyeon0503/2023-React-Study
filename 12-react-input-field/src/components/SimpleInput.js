import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  // const nameInputRef = useRef("");
  const [enteredName, setEnteredName] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log("Name is Valid");
  //   }
  // }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    // state는 비동기로 처리되므로 즉각적으로 반영되지 않는다
    // 최신의 상태를 반영하고 싶다면 event 객체를 쓰자
    // if (event.target.value.trim() !== "") {
    //   setEnteredNameIsValid(true);
    // }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    
    // if (enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    // }
  };

  const forSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    // const enteredValue =  nameInputRef.current.value;

    if (!enteredNameIsValid) {
      // setEnteredNameIsValid(false);
      return;
    }

    // setEnteredNameIsValid(true);
    
    setEnteredName("");
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={forSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          // ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
