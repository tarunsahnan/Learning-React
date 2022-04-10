import { useState } from "react";
import './style/Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from "../UI/Card"
import ExpenseYearFilter from '../Expense Year Filter/Expense Year Filter';

function Expenses(props) {

    const [selectedValue,setSelectedValue] = useState("");

    function selectedValueHandler(e){
        setSelectedValue(e);
        console.log(selectedValue);
    }

    return (
        <Card className="expenses">
            <ExpenseYearFilter selectedValue={selectedValue} onChangeSelectedValue={selectedValueHandler}/>
            
            {/* dynamic displaying of items */}
            {
                (props.expenses.map((item) =>{
                    return <ExpenseItem title={item.title} date={item.date} amount = {item.amount} />
                }))
            }
        </Card>
    )
}

export default Expenses