import './Sample.css'

function Sample(props){
    return (
        <div className='center'>
            <h1>{props.title}</h1>
            <p>{props.p}</p>
        </div>
        )
}

export default Sample;