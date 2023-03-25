import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event)=>{
    props.onFilterChangeHandler(event.target.value);
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler} value={props.selected}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

// 모든 리액트 앱에는 일부 상태를 관리하면 몇개의 컴포넌트를 가직 된다
// 예를 들면 지금의 filter or stat를 관리하는 Expense 컴포넌트 가은 것이나
// input state를 관리하는 ExpenseForm 컴포넌트 같은 것들이다
// 또 다른 컴포넌트로 state 관리하지 않는 컴포넌트는 ExpenseItem 는 dump component라고 한다