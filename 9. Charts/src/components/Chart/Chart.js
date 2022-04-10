import ChartBar from "./ChartBar/ChartBar"
import "./Chart.css"

function Chart(props){

    let valuesArr=props.data.map(item => item.value);
    const maxExpense=Math.max(...valuesArr);

    return (<div className="chart">
                {props.data.map((item) => {
                    return <ChartBar key={item.label} value={item.value} label={item.label} max={maxExpense} />
                })}
            </div>
    )
}

export default Chart;