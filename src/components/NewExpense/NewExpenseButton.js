const NewExpenseButton = (props) => {
    return (
        <button onClick={()=> {props.onClickNew('open')}} className="new-expense-button">
            Add Expense
        </button>
    );
}
export default NewExpenseButton;