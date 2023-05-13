import {useEffect, useRef,  useState} from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(()=>{
    if(enteredNameIsValid){
      console.log('Name is Valid');
    }
  },[enteredNameIsValid]);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const forSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    // const enteredValue =  nameInputRef.current.value;

    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false);
      return;
    }
    // console.log(enteredName);
    // console.log(enteredValue);
    setEnteredNameIsValid(true);

    setEnteredName('');
  };
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control' ;

  return (
    <form onSubmit={forSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p> }
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
