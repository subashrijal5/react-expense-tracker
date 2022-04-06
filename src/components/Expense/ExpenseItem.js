import './ExpenseItem.css';
import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '.././Card';
function ExpenseItem(props) {
    const [title, setTitle] = useState(props.expense.title);
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.expense.amount}</div>
            </div>
        </Card>
    )
}
export default ExpenseItem;