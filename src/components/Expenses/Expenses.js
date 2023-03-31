import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

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
        <ExpenseFilter selected={filteredYear} onChangeYear={filterHandler}/>
        {filteredExpenses.map(el => (
          <ExpenseItem 
            key={el.id}
            title={el.title} 
            amount={el.amount} 
            date={el.date} />
          )
        )}
      </Card>
    </div>
  )
}

export default Expenses;