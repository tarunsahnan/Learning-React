import './Sample.css'

function Sample(){
    const name="Learning React";
    const date= new Date();

    return (
        <div className='center'>
            <h1>{name}</h1>
            <p>{date.toISOString()}</p>
        </div>
        )
}

export default Sample;