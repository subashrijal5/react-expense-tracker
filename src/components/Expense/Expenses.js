import ExpenseItem from './ExpenseItem';
import React, { useState } from 'react';
import '././Expenses.css';
import Card from '.././Card';
import ExpensesFilter from './Filter';
import ExpenseChart from './ExpenseChart';
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const handleYearSelect = (year) => {
        setFilteredYear(year);
    }
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);
    return <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onYearSelect={handleYearSelect}></ExpensesFilter>
            <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
            {filteredExpenses.length === 0 && <p>No expenses found</p>}
            {filteredExpenses.map((expense) => (
                <ExpenseItem key={expense.id} expense={expense} />
            ))}

        </Card>
    </div>

}
export default Expenses; 