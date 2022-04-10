import { useState } from "react";
import "./style/Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseYearFilter from "../Expense Year Filter/Expense Year Filter";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [selectedValue, setSelectedValue] = useState("");

  function selectedValueHandler(e) {
    setSelectedValue(e);
    console.log(selectedValue);
  }

  const filteredItems = props.expenses.filter(
    (item) => item.date.getFullYear() == selectedValue
  );

  return (
    <Card className="expenses">
      <ExpenseChart expense={filteredItems} />

      <ExpenseYearFilter
        selectedValue={selectedValue}
        onChangeSelectedValue={selectedValueHandler}
      />
      {filteredItems.length === 0 ? (
        <h2>No Record Found</h2>
      ) : (
        filteredItems.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              date={item.date}
              amount={item.amount}
            />
          );
        })
      )}
    </Card>
  );
}

export default Expenses;
