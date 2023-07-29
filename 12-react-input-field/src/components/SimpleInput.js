import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const { 
    value : enteredName,
    isValid : enteredNameIsValid,
    hasError : nameInputHasError, 
    valueChangeHandler : nameChangeHandler,
    inputBlurHandler : nameBlurHandler,
    reset : resetNameInput
  } = useInput( value => value.trim() !== '');

  const {
    value : enteredEmail,
    isValid : enteredEmailIsValid,
    hasError : emailInputHasError,
    valueChangeHandler : emailChangeHandelr,
    inputBlurHandler : emailBlurHandler,
    reset : resetEmailInput
  } = useInput (value => value.includes('@'))



  // 모든 디펜던시들을 합친 후에 이 값이 모두 유효한지 확인하고 유효하다면 전체 폼이 유효하다고 설정
  // useEffect(()=>{
    let formIsValid = false;

    if(enteredNameIsValid && enteredEmailIsValid){
      formIsValid = true;
    }
  // }, [enteredNameIsValid]);

  // prev
  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log("Name is Valid");
  //   }
  // }, [enteredNameIsValid]);


  const forSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  
  const emailInputClasses = emailInputHasError
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
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandelr}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
