import React, { useState } from 'react'
import './../styles/calender.css'
function Calander() {
    const [day, setDay] = useState('_ _')
    const [month, setMonth] = useState('_ _')
    const [year, setYear] = useState('_ _')
    const getDate = (props) => {
        let date=props.target.value
        setDay(31-date+10)
    }
    const getMonth = (props) => {
        let month=props.target.value
        setMonth(9-month)
    }
    const getYear = (props) => {
        let yr = props.target.value
        setYear(2023 - yr)
    }
    return (
        <div className='cald-div'>
            <div className="input-div">
                <div className="input-subdiv">
                    <label htmlFor="day">Date</label>
                    <input className='input' id='day' onChange={getDate} placeholder={day} />
                </div>
                <div className="input-subdiv">
                    <label htmlFor="day">Month</label>
                    <input className='input' id='day' onChange={getMonth} placeholder={month} />
                </div>
                <div className="input-subdiv">
                    <label htmlFor="day">Year</label>
                    <input className='input' id='day' onChange={getYear} placeholder={year} />
                </div>
            </div>
            <div className="txt-div">
                <p className="title">Your Age:)</p>
                <div className="age-text">
                    <p><span className='age-txt'>{year}</span> Years</p>
                    <p><span className='age-txt'>{month}</span> Month</p>
                    <p><span className='age-txt'>{day}</span> Days</p>
                </div>
            </div>
        </div>
    )
}

export default Calander