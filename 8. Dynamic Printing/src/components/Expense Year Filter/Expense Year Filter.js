import "./Expense Year Filter.css"

const ExpenseYearFilter = (props) => {

    function selectedValueHandler(e){
        props.onChangeSelectedValue(e.target.value);
    }

    return (
        <div>
            <select value={props.selectedValue} onChange={selectedValueHandler}>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    )

}
export default ExpenseYearFilter;