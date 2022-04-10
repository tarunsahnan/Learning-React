import { useState } from "react";
import "./New Expense Form.css"

const NewExpenseForm = (props) => {

    const[newTitle,setTitle]=useState("");
    const[newAmount,setAmount]=useState("");
    const[newDate,setDate]=useState("");

    function inputTitleHandler(e) {
        setTitle(e.target.value);
    }

    const inputAmountHandler = (e) => {
        setAmount(e.target.value);
    }

    const inputDateHandler = (e) => {
        setDate(e.target.value);
    }

    const addNewElementHandler= (e)=>{
        e.preventDefault();
        const newExpenseDetails ={
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
        }
        // console.log(newExpenseDetails);

        //clearing input fields
        setTitle("");
        setAmount("");
        setDate("");

        props.onSubmitButtomHit(newExpenseDetails);
    }

    

    return (<form onSubmit={addNewElementHandler}>

                <div className="inputs">
                    <div className="title">
                    <p>Enter Title</p>
                    <input type="text" value={newTitle} onChange={inputTitleHandler}/>
                    </div>
                    <div className="amount">
                    <p>Amount</p>
                    <input type="number" min="10" step="1" value={newAmount} onChange={inputAmountHandler}/>
                    </div>
                    <div className="date">
                    <p>Enter Date</p>
                    <input type="date" min="2019-01-01" max="2022-04-04" value={newDate} onChange={inputDateHandler}/>
                </div>
                <button className="btn" >ADD ITEM</button>

                </div>
            </form>)
}
export default NewExpenseForm;