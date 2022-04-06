import './Form.css';
import React, { useState } from 'react';
const ExpenseForm = (props) => {
    const [expense, setExpense] = useState({
        title: '',
        amount: '',
        date: '',
        id: Math.random().toString(36).substr(2, 9)
    });
    const handleTitleChange = (e) => {
        setExpense((expense) => ({
            ...expense,
            title: e.target.value,
        }));
    }
    const handleAmountChange = (e) => {
        setExpense((expense) => ({
            ...expense,
            amount: e.target.value,
        }));
    }
    const handleDateChange = (e) => {
        setExpense((expense) => ({
            ...expense,
            date: e.target.value,
        }));
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const submitData = {
            ...expense,
            date: new Date(expense.date),
            amount: +expense.amount,
        };
        props.onAddExpense(submitData);
        setExpense({
            title: '',
            amount: '',
            date: ''
        })
        props.onSubmitForm('close');
    }
    return <form onSubmit={handleFormSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="new-expense__title">Title</label>
                <input value={expense.title} onChange={handleTitleChange} type="text" ></input>
            </div>
            <div className="new-expense__control">
                <label htmlFor="new-expense__amount">Amount</label>
                <input value={expense.amount} onChange={handleAmountChange} type="number" ></input>
            </div>
            <div className="new-expense__control">
                <label htmlFor="new-expense__date">Date</label>
                <input value={expense.date} onChange={handleDateChange} type="date" ></input>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Submit</button>
            </div>
            <div className="new-expense__actions">
                <button onClick={() => props.onSubmitForm('close')} type='reset'>Cancel</button>
            </div>
        </div>
    </form>
}
export default ExpenseForm;