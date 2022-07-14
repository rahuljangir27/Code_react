import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
//   // let displayExpenseData = <p>No data Found</p>;
//   let displayExpenseData = props.allData.map((expense) => (
//     <ExpenseItem
//       key={expense.id}
//       title={expense.title}
//       date={expense.date}
//       amount={expense.amount}
//     />
//   ));

//   console.log(props.displayData.length)
//   //   console.log(props.allData);
//   //   console.log(props.displayData);
//   //   console.log(props.passUserYear);


  
//   if (props.displayData.length > 0) {
//     displayExpenseData = props.displayData.map((expense) => (
//       <ExpenseItem
//         key={expense.id}
//         title={expense.title}
//         date={expense.date}
//         amount={expense.amount}
//       />
//     ));
//   } else if (props.displayData.length === 0 && props.allData.length === 0 ) {
//     displayExpenseData = <p>No data Found</p>;
//   }
//   //   else if (props.displayData.length > 0 && props.passUserYear === "Select Year") {
//   //     displayExpenseData = props.allData.map((expense) => (
//   //         <ExpenseItem
//   //           key={expense.id}
//   //           title={expense.title}
//   //           date={expense.date}
//   //           amount={expense.amount}
//   //         />
//   //       ));
//   //   }
  return (  
  <div className="expenses-list">
  {/* {displayExpenseData} */}
  {props.passUserYear === "Select Year" ? (
        props.allData.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))
      ) : (props.displayData.length === 0 ? (
        <div className="expenses-list__fallback"><h2> Found no expenses</h2></div>
      ) : (
        props.displayData.map((expense) => (
          // props.passUserData.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))
      ))}
      </div>
  );
};

export default ExpensesList;
