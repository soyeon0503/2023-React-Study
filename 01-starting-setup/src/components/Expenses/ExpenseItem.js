import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2000, 5, 3);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 234.23;

  // state는 리액트가 독자적으로 관리한다
  // 컴포넌트별 인스턴스를 기반으로 해서 각자 독립적인 state를 갖는다

  // hookㄹㄷ은 리액트 컴포넌트 함수 밖에서 호출하면 안된다
  // 중첩된 함수안에서 호출할 수 없고 컴포넌트 안에서 직접적으로 호출되어야 한다
  // state는 호출된 즉시 업데이트 되지 않는다
  // 함수를 호출하면 업데이트를 예약되는 것이다

  // const를 사용하는 이유?
  // 
  const [title, setTitle] = useState(props.title);

  // 컴포넌트가 재평가되면서 값이 바뀐다
  // const clickHandler = () => {
  //  setTitle("UPDATE!!!!");
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
  );
};

export default ExpenseItem;
