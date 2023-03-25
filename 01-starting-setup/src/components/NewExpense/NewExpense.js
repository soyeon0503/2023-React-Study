import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // 매개변수로 받아온 Data 객체를 저장하고
    // 새로운 키인 id룰 추가한다
    const expenseData = {
      ...enteredExpenseData,
      id: (Math.random() * 10 + 1).toString(),
    };
    props.onAddExpeseHandler(expenseData);
    console.log(expenseData);
  };
  const [flag, setFlag] = useState(true);
  const clickBtn = () => {
    setFlag(!flag);
  };

  return (
    <div className="new-expense">
      {/* 
            컴포넌트 내부에서 어떤 일이 벌어졌을 때 작동되는 함수로 ExpenseData가 저장될 때 호출된다 
            컴포넌트 안에서 호출 될 수도 있는 함수이며 부모에서 정의를 해야한다
            onSaveExpnseData 속성은 값으로 이 saveExpenseDataHandler 함수를 가진다
            그러면 자식인 ExpenseForm으로 전달된다
        */}

      {flag ? (
        <button onClick={clickBtn}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClickBtn={clickBtn}
        />
      )}
    </div>
  );
};

export default NewExpense;

// 자식이 부모한테 data를 전달해주는 방법은
// 부모에서 데이터를 받을 수 있는 함수를 만들어서 함수를 포인터로 넘겨주고
// 자식 컴포넌트는 props로 그 함수를 호출해서 인자로 넘겨주면 된다
// 만약 같은 level에 있는 컴포넌트에 데이터를 전달해주고 싶다면 무조건 두 컴포넌트가 연결되어 있는
// 부모 컴포넌트를 통해서만 할 수 있다
// 이럴 경우 컴포넌트의 상태 데이터를 "끌어올리기"해서 부모 컴포넌트에 전달 후
// 형제 컴포넌트는 전달 받을 수 있다
// props를 자유 자래로 사용하는 것이 중요하다
// 우리가 했던 것처럼 부모 컴포넌트는 자식 컴포넌트에 속성을 추가하여 함수 포인터를 전달하고
// 자식 컴포넌트는 그 함수를 호출하여 인수로 데이터를 넘겨준다
// 이걸 상태 데이터 끌어올리기라고 한다
// 우리는 NewExpense에서 ExpenseForm 에서 받은 데이터를 저장하지 않는다
// App으로 토스해줄 뿐이다
