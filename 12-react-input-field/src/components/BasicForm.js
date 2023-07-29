import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    value : enteredFirstName, 
    isValid : firstNameIsValid,
    hasError : firstNameHasError,
    valueChangeHandler : firstNameChangeHandler,
    inputBlurHandler : firstNameBlurHandler,
    reset : resetFirstName
  } = useInput(value => value.trim() !== '');

  const {
    value : enteredLastName, 
    isValid : lastNameIsValid,
    hasError : lastNameHasError,
    valueChangeHandler : lastNameChangeHandler,
    inputBlurHandler : lastNameBlurHandler,
    reset : resetLastName
  } = useInput(value => value.trim() !== '');

  const {
    value : enteredEmail, 
    isValid : emailIsValid,
    hasError : emailHasError,
    valueChangeHandler : emailChangeHandler,
    inputBlurHandler : emailBlurHandler,
    reset : resetEmail
  } = useInput(value => value.trim() !== '');


  let formIsValid = false;
  if(firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();
    if(!formIsValid){
      return;
    }
    resetFirstName();
    resetLastName();
    resetEmail();
  }

  const firstNameInputClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";   
  
  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input 
            className={firstNameInputClasses}
            type='text' 
            id='name' 
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input 
            className={lastNameInputClasses}
            type='text' 
            id='name' 
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          className={emailInputClasses}
          type='email' 
          id='name' 
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p className='error-text'>Please enter a valid email</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
