import React, {useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';


function Expenses(props) {  
  const [filteredYear, setFilteredYear] = useState('2023');

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterHandler = selectedYear => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter 
          selected={filteredYear} 
          onChangeYear={filterHandler}
          />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses;