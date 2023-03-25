import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
    console.log(filterdYear);
    props.items.filter(props);
  };

  const filteredArray = props.items.filter((expens) => {
    return expens.date.getFullYear().toString() === filterdYear;
  });

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpensesFilter
            selected={filterdYear}
            onFilterChangeHandler={filterChangeHandler}
          />
          <ExpenseChart expeses={filteredArray} />
          <ExpenseList items={filteredArray} />
          {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem> */}
          {/*
        조건식이 길어서 읽기 힘드니 &&연산자를 사용해서 render할 수도 있다 
        {filteredArray.length === 0 ? (
          <p>No Expense found.</p>
        ) : (
          filteredArray.map((expens) => (
            <ExpenseItem
              key={expens.id}
              title={expens.title}
              amount={expens.amount}
              date={expens.date}
            />
          ))
        )} */}
          {/* 
        
        {
          filteredArray.length === 0 && <p>No expense found.</p>
        }
        {
          filteredArray.map((expens)=> (
            <ExpenseItem
            key={expens.id}
            title={expens.title}
            amount={expens.amount}
            date={expens.date}
          />
          ))
        } */}
          {/* {props.items.map((expens, index)=>(
        //   <ExpenseItem
        //     key ={expens.id}
        //     title = {expens.title}
        //     amount = {expens.amount}
        //     date={expens.date}
        //   />
        // ))}  */}
        </Card>
      </li>
    </div>
  );
};

export default Expenses;
// 버튼 추가하면 우리 화면에서는 맨 위에 보이는 아이템이 실제로는
// 맨 아래에 가 있다
// 리액트는 새롭게 생긴 아이템을 div맨 마지막 아이템으로 렌더링하고
// 모든 아이템을 업데이트해서 순서를 바꾼다
// 리액트에게는 다 고만고만한 애들로 보이기 때문에 새로운 아이템이 어느 위치에 추가되어야 할지를 알려주어야 한다
// 아이템들을 구분할 수 있게끔 구별해주는 것이 필요하다
// kety요소를 추가해서 리액트가 개별 아이템을 인식할 수 있도록 도와준다
// key이 value값은 고유값으로 설정해줘야한다
// 고유 id를 정하기 귀찮다면 걍 map에서 전달하는 함수에서 자동으로 얻어지는
// index값으로 사용하자 -> 추천은 아님(특정 아이템에 대한 인덱스가 항상 똑같고 간접적으로 지정된 것이기 때문)
