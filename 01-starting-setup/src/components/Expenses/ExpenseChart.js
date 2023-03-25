import React from "react";

import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const ChartDataPoint = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 30,
    },
    {
      label: "Mar",
      value: 50,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sep",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];
  for(const expese of props.expeses){
    const expeseMonth = expese.date.getMonth(); //starting at 0 => Jan
    ChartDataPoint[expeseMonth].value += expese.amount;
}

  return <Chart dataPoints={(ChartDataPoint)} />;
};

export default ExpenseChart;
