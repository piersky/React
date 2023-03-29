import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeYear={filterHandler}/>
        {props.expenses.map(el => <ExpenseItem title={el.title} amount={el.amount} date={el.date} />)}
      </Card>
    </div>
  )
}

export default Expenses;