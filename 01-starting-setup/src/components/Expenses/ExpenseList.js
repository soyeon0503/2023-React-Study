import React from "react";

import ExpenseItem  from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = (props)=> {
    if(props.items.length  === 0){
        return <h2 className="expenses-list__fallback">
        No expense Found.
        </h2>
    }
    return <ul className="expenses-list">{
        props.items.map((expens) => (
            <ExpenseItem
                key={expens.id}
                title={expens.title}
                amount={expens.amount}
                date={expens.date}
            />
        ))
    }

    </ul>

};

export default ExpenseList;