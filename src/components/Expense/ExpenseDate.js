import './ExpenseDate.css';
function ExpenseDate(props) {
    const mydate = new Date(props.date);
    const month = mydate.toLocaleString('default', { month: 'long' });
    const day = mydate.getDate();
    const year = mydate.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}

export default ExpenseDate;
