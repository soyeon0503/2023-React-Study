import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // 인자로 event를 받으면 이벤트 객체를 받을 수 있다.
  // target이라는 프로퍼티는 이벤트가 발생되는 요소를 가리킨다
  // values는 이벤트가 발생된 시점의 입력값을 값으로 가진다
  //event.target.value이 값은 문자열로 return 된다
  //항상 문자열로 초기화된다

  // 컴포넌트가 재 평가되는 상황에서 값을저장해서 살리고 싶을 때도 useState를 사용할 수 있다.

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //세가지 state를 각각 관리할 수도 있지만 결국은 한 폼에 입력받는 값이므로 한번에 관리해도 상관없다
  //어느게 좋다 나쁘다는 아니지만 뭐.. 개발자가 알아서 생각하자
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle : '',
  //     enteredAmount : '',
  //     enteredDate : ''
  //   });

  const titleChangeHandler = (event) => {
    // title event trigger
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     // 여기서 변경되는 건 title이지만 나머지 두 값도 잊지 않아야 한다
    //     // 업데이트되지 않는 값은 기존 상태 값을 복사한다
    //     // 스프레드 연산자를 통해 키와 값을 오버라이드 할 수 있다
    //     ...userInput,
    //     enteredTitle : event.target.value,
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // 하기의 코드는 좋은 방법은 아니다
    // 만약 하나씩 증가하는 카운터를 관리하고 있다면 하기의 방법처럼 하는 것이 아니라
    // setUserInput({
    //     ...userInput,
    //     enteredAmount : event.target.value,
    // });
    // 상태를 업데이트하는 함수를 위한 대체 폼을 사용해야 한다
    // useState를 호출해서 카운팅하는 함수를 전달해야한다
    // 이 접근 방식을 사용한다면 리액트는 이안에 있는 함수에서 이 상태 스냅샷이 가장 최신의 스냅샷이라는 것과
    // 항상 계획된 상태 업데이트를 염두에 두고 있다는 것을 보증한다
    // 항상 최신 상태의 스냅샷에서 작업하도록 하는 좀 더 안전한 방법이다
    // 이전 상태에 따라 상태를 업데이트 한다면 하기와 가이 함수 폼을 사용하는 것이 좋다
    // setUserInput((prevState) => {
    //     return {... prevState,
    //         enteredAmount : event.target.value
    //     };
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate : event.target.value,
    // });
  };
  const submitHandler = (event) => {
    // 폼 제출후 페이지가 리로드 되는 것을 막을 수 있다
    // 하기의 함수를 호출한다면 요청이 보내지지 않기 때문에 페이지는 리로드 되지 않는다
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // ExpenseFormp에서는 onSaveExpenseData가 정의되진 않았지만 
    // NewExpense에서 속성으로 넘겨 받았으므로 사용할 수 있다
    // 자식인 ExpenseForm에서 onSaveExpenseData를 호출할 때 여기서 생성한
    // expenseData를 인자로 전달 할 수 있다
    // 그리고 그 값은 NewExpense에서 매개변수로 받는 값이 된다

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={props.onClickBtn}>cancle</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

// onChange & onInput
// 겉에서 봤을 땐 같은 기능을 하지만(사용자 입력에 반응)
// onChange는 모든 입력 타입에 같은 이벤트를 사용할 수 있다

// state를 이용하면 양방향 바인딩이라는 것을 할 수 있다.
// 양방향 바인딩이란 변경되는 입력값만 수신하는 것이 아니라 입력에 새로운 값을 다시 전달할 수도 있다는 것이다
// 프로그램에@ 따라 입력값을 재설정하거나 입력할 수도 있다
// value에 state값을 반인딩하면 상태를 업데이트 하기위해 입력에서 변경사항을 수신하는 것 뿐마 아니라
// 입력에서 상태를 다시 보내주기도 한다

// 우리는 ExpenseForm의 data를 app 컴포너느에 전달하고 싶다
// 자식에서 부모로 전달하고 싶을 때에는 자식 컴포넌트에서 자체 이벤트 속성을 생성해서 호출하면
// 값으로 함수를 가질 수 있게끔 한다...
// 부모 컴포넌트로 부터 자식 컴포넌트로 함수를 전달하고 자식은 그 함수를 호출 할 수 있다
// 그 함수를 호출할 때 함수에 매개변수로 데이터를 전달하면 자식은 부모에게 정보를 전달할수 있다
// => 부모가 만든 함수를 자식이 호출해서 거기다가 매개변수로 자신이 가지고 있는 정보를 넘기면
// 부모는 자식의 정보를 볼 수 있다
// 지금 컴포넌트의 순서가 app -> NewExpense -> ExpenseForm
// 으로 되어 있는데 app까지 전달하고 싶을 때도 마찬가지이다
// ExpenseForm->NewExpense->app 순으로 전달해야 한다