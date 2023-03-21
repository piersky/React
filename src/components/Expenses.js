import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map(el => <ExpenseItem title={el.title} amount={el.amount} date={el.date} />)}
    </Card>
  )
}

export default Expenses;