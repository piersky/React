import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
    <ExpenseFilter selected={filteredYear} onChangeYear={filterHandler}/>
      <Card className="expenses">
        {props.expenses.map(el => <ExpenseItem title={el.title} amount={el.amount} date={el.date} />)}
      </Card>
    </div>
  )
}

export default Expenses;