import React from 'react'
import '../styles/inputfield.css'

function InputFields(props) {
    return (
        <form className="input-div">
            <div className="input-subdiv">
                <label htmlFor="day">Date</label>
                <input className='input' id='day' onChange={props.dateFunc}/>
            </div>
            <div className="input-subdiv">
                <label htmlFor="day">Month</label>
                <input className='input' id='day' onChange={props.monthFunc}/>
            </div>
            <div className="input-subdiv">
                <label htmlFor="day">Year</label>
                <input className='input' id='day' onChange={props.yearFunc}/>
            </div>
        </form>
    )
}

export default InputFields