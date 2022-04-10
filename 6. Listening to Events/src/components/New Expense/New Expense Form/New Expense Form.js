import { useState } from "react";
import "./New Expense Form.css"

const NewExpenseForm = () => {

    const[newTitle,setTitle]=useState("");
    const[newAmount,setAmount]=useState("");
    const[newDate,setDate]=useState("");

    function inputTitle(e) {
        setTitle(e.target.value);
    }

    const inputAmount = (e) => {
        setAmount(e.target.value);
    }

    const inputDate = (e) => {
        setDate(e.target.value);
    }
    return (<div className="form">
                <div className="title">
                <p>Enter Title</p>
                <input type="text" onChange={inputTitle}/>
                </div>
                <div className="amount">
                <p>Amount</p>
                <input type="number" min="10" step="1" onChange={inputAmount}/>
                </div>
                <div className="date">
                <p>Enter Date</p>
                <input type="date" min="2019-01-01" max="2022-04-04" onChange={inputDate}/>
        
                </div>
            </div>)
}
export default NewExpenseForm;