import React from 'react'
import '../styles/inputfield.css'
import { useState } from 'react'
function Input(props) {
    const [dateErrorMsg, setDateErrorMsg] = useState("")
    const [monthErrorMsg, setMonthErrorMsg] = useState("")
    const [yearErrorMsg, setYearErrorMsg] = useState("")

    const getDate = (e) => {
        let bDate = e.target.value
        if (bDate > 0 && bDate <= 31) {
            props.getDate(bDate)
            setDateErrorMsg("")
        } else {
            setDateErrorMsg("*enter valid date, invalid date")
        }

    }
    const getMonth = (e) => {
        let bMonth = e.target.value
        if (bMonth > 0 && bMonth <= 12) {
            props.getMonth(bMonth)
            setMonthErrorMsg("")
        } else {
            setMonthErrorMsg("*enter valid Month, invalid Month")
        }
    }
    const getYear = (e) => {
        let bYear = e.target.value
        if (bYear >= 1 && bYear <= new Date().getFullYear()) {
            setYearErrorMsg("")
            props.getYear(bYear)
        } else {
            setYearErrorMsg("*enter valid Year, invalid Year")
        }
    }
    return (
        <form>
            <div className="input-div">
                <div className="input-subdiv">
                    <label htmlFor="date">Date</label>
                    <input className='input' id='date' onChange={getDate} />
                </div>
                <div className="input-subdiv">
                    <label htmlFor="month">Month</label>
                    <input className='input' id='month' onChange={getMonth} />
                </div>
                <div className="input-subdiv">
                    <label htmlFor="year">Year</label>
                    <input className='input' id='year' onChange={getYear} />
                </div>
            </div>
            <p>{monthErrorMsg}</p>
            <p>{dateErrorMsg}</p>
            <p>{yearErrorMsg}</p>
        </form>
    )
}

export default Input