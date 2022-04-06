import { useState } from 'react';
import Form from './Form';
import './NewExpense.css';
import NewExpenseButton from './NewExpenseButton';
const NewExpense = (props) => {
    const [newexpense, setNewExpense] = useState('close');
    const handleNewClick = (type) => {
        setNewExpense(type);
    }
    if (newexpense === 'close') {
        return <div className='new-expense'>
            <NewExpenseButton onClickNew={handleNewClick}></NewExpenseButton>
        </div>
    }
    return <div className='new-expense'>
        <Form onSubmitForm={handleNewClick} onAddExpense={props.onAddExpense}></Form>
    </div>
}
export default NewExpense;