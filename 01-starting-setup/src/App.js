import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  

//   const addExpenseHandler = (enteredExpenseData) => {
//     // 매개변수로 받아온 Data 객체를 저장하고
//     // 새로운 키인 id룰 추가한다
//     const expenseData = {
//         ...enteredExpenseData,
//         id : Math.random().toString()
//     };
//     expenses.push(expenseData);
//     console.log(expenses);
// };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "EXAMPLE"),
  //   React.createElement(Expenses, {items : expenses})
  // );

  return (
    <div>
      <NewExpense onAddExpeseHandler = {addExpenseHandler }/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
