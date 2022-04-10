import "./New Expense Form.css"

const NewExpenseForm = () => {
    return (<div className="form">
                <div className="title">
                <p>Enter Title</p>
                <input type="text"/>
                </div>
                <div className="amount">
                <p>Amount</p>
                <input type="number" min="10" step="1"/>
                </div>
                <div className="date">
                <p>Enter Date</p>
                <input type="date" min="2019-01-01" max="2022-04-04"/>
        
                </div>
            </div>)
}
export default NewExpenseForm;