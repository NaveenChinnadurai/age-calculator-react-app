import React, { useState } from 'react'
import './../styles/calender.css'
import InputFields from './inputFields';
function Calander(props) {

    const presentDate = props.currDate
    const presentMonth = props.currMon
    const presentYear = props.currYr

    const [birthDate, setBirthDate] = useState(0)
    const [birthMonth, setBirthMonth] = useState(0)
    const [birthYear, setBirthYear] = useState(0)

    const [ageDay, setAgeDay] = useState(0)
    const [ageMonth, setAgeMonth] = useState(0)
    const [ageYear, setAgeYear] = useState(0)

    //for error msg
    const [errorMsg, setErrorMsg] = useState("")

    const getDate = (props) => {
        let bDate = props.target.value
        setBirthDate(bDate)
        if (bDate > 0 && bDate <= 31) {
            setAgeDay(presentDate - bDate)
            setErrorMsg("")
        } else {
            setErrorMsg("*enter valid date, invalid date")
        }
    }
    const getMonth = (props) => {
        let bMonth = props.target.value
        setBirthMonth(bMonth)
        if (bMonth >= 1 && bMonth <= 12) {
            if (bMonth > presentMonth) {
                setAgeMonth(12 - bMonth + presentMonth)
                setErrorMsg("")
            } else {
                setAgeMonth(presentMonth - bMonth)
                setErrorMsg("")
            }
        } else {
            setErrorMsg("*enter valid month, invalid month")
        }
    }
    const getYear = (props) => {
        let byear = props.target.value
        setBirthYear(byear)
        if (presentYear >= byear) {
            setAgeYear(presentYear - byear)
            setErrorMsg("")
        } else {
            setErrorMsg("*enter valid year, invalid year entered")
        }
    }
    return (
        <div className='cald-div'>
            <InputFields dateFunc={getDate} monthFunc={getMonth} yearFunc={getYear} />
            <p>{errorMsg}</p>
            <div className="txt-div">
                <p className="title">Your Age : ) </p>
                <div className="age-text">
                    <p><span className='age-txt'>{ageYear}</span> Years</p>
                    <p><span className='age-txt'>{ageMonth}</span> Month</p>
                    <p><span className='age-txt'>{ageDay}</span> Days</p>
                </div>
            </div>
        </div>
    )
}

export default Calander