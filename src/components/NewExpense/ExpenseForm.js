import React, {useState} from "react";
import './ExpenseForm.css';


const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    })
  }

  return <form>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>{userInput.enteredTitle}</label>
        <input type="text" onChange={titleChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <label>{userInput.enteredAmount}</label>
        <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>{userInput.enteredDate}</label>
        <input type="date" min="2023-01-01" step="2023-12-31" onChange={dateChangeHandler}/>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </div>
  </form>
};

export default ExpenseForm;