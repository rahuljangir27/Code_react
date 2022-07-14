import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "el2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
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

  // this is how the below jsx will work behind the scenes

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},"Let's get started!"),
  //   React.createElement(Expenses,{items:expenses})
  // );
  const [userData, setUserData] = useState(expenses);
  const addExpenseData = (expense) => {
    const userExpense = {
      ...expense,
      // id:"e5"
      id:Math.random().toString(),
    };
    setUserData(prevata=>[...prevata, userExpense]);
  };
  // console.log(userData)

  return (
    <div>
      <NewExpense onAddExpense={addExpenseData} />
      <Expenses passUserData={userData} />
    </div>
  );
}

export default App;
