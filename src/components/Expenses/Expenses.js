import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./NewExpense/ExpensesChart";

function Expenses(props) {
  const [filteredYear, selectedFilteredYear] = useState("Select Year");
  const passingUserData = props.passUserData

  function userSelectedYear(year) {
    selectedFilteredYear(year);
  }
  const expenseData = props.passUserData.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        onSaveYear={userSelectedYear}
        defaultYear={filteredYear}
      />
       {/* {filteredYear === "Select Year"
        ? props.passUserData.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          )) 
        :  */}
        <ExpenseChart expenseData={expenseData}/>
        <ExpensesList displayData={expenseData} allData={passingUserData} passUserYear={filteredYear} />
    </Card>
  );
}

export default Expenses;
