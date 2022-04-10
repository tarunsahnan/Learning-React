import NewExpenseForm from "./New Expense Form/New Expense Form"
import "./New Expense.css"

const NewExpense = () => {
    return (<div>
                <NewExpenseForm/>
                <button className="btn">ADD ITEM</button>
            </div>)
}
export default NewExpense;