import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import "./ExpenseForm"

function NewExpense(props) {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const toggleDisplay = () => {
    isDisplayed ? setIsDisplayed(false) : setIsDisplayed(true);
  };
  const saveExpenseDataHandler = (expense) => {
    toggleDisplay();
    props.onAddExpense(expense);
  };

  return (
    <div className="new-expense">
      {isDisplayed ? (
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelButton ={toggleDisplay}/>
      ) : (
        <button onClick={toggleDisplay}>Add Expenses</button>
      )}
    </div>
  );
}

export default NewExpense;
