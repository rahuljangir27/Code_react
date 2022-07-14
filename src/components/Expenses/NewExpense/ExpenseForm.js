import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //   Multiple States
    const [enteredTitle, setEntertedTitle] = useState("");
    const [enteredAmount, setEntertedAmount] = useState("");
    const [enteredDate, setEntertedDate] = useState("");

    //Single State containing multiple items
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredDate: "",
  //   enteredAmount: "",
  // });
  
  const titleChangeHandler = (event) => {
    setEntertedTitle(event.target.value)

    //Single State
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEntertedDate(event.target.value)

    //Single State
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEntertedAmount(event.target.value)

    //Single State
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const submitClickHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: parseInt(enteredAmount),
    };
    setEntertedAmount('')
    setEntertedDate('')
    setEntertedTitle('')

    props.onSaveExpenseData(expenseData)
  };

  return (
    
    <form onSubmit={submitClickHandler}>
     <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
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
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        
        <div className="new-expense__actions"></div>
        <button type ="button" onClick={props.cancelButton}>Cancel</button>
        <button type="submit">Add Expense</button>
        </div>
      
    </form>
  );
}

export default ExpenseForm;
