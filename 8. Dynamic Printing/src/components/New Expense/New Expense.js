import NewExpenseForm from "./New Expense Form/New Expense Form"

const NewExpense = (props) => {

    const submitButtonHit = (expense) => {
        
        expense = {
            ...expense,
            id: Math.random().toString()
        }

        props.onAddNewElemetinList(expense);
    }

    return (<div>
                <NewExpenseForm onSubmitButtomHit={submitButtonHit}/>  
            </div>)
}
export default NewExpense;