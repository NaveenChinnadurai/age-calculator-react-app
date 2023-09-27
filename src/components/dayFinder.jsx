import React, { useState } from 'react'
import './../styles/calender.css'
import './../styles/dayFinder.css'
import InputFields from './inputFields'

function DayFinder(props) {

  const [birthDate, setBirthDate] = useState(0)
  const [birthMonth, setBirthMonth] = useState(0)
  const [birthYear, setBirthYear] = useState(0)

  const [errorMsg, setErrorMsg] = useState("")

  const getDate = (props) => {
    let bDate = props.target.value
    if (bDate > 0 && bDate <= 31) {
      setBirthDate(bDate)
      setErrorMsg("")
    } else {
      setErrorMsg("*enter valid date, invalid date")
    }

  }
  const getMonth = (props) => {
    let bMonth = props.target.value
    if (bMonth > 0 && bMonth <= 12) {
      setBirthMonth(bMonth)
      setErrorMsg("")
    } else {
      setErrorMsg("*enter valid Month, invalid Month")
    }
  }
  let yr = props.yr
  const getYear = (props) => {
    let bYear = props.target.value
    if (bYear > 1) {
      setErrorMsg("")
      setBirthYear(bYear)
    } else {
      setErrorMsg("*enter valid Year, invalid Year")
    }
  }

  //for day predictor
  const isLeapYear = (year) => {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      } else {
        return false;
      }
    } else {
      if (year % 4 == 0) {
        return true
      }
      else {
        return false
      }
    }
  }
  const dayArray = [
    [0, 'Sunday'],
    [1, 'Monday'],
    [2, 'Tuesday'],
    [3, 'wednesday'],
    [4, 'Thursday'],
    [5, 'Friday'],
    [6, 'Saturday']
  ]
  var day=""
  const dayFinal = () => {
    dayArray.forEach(e => {
      if (sum === e[0]) {
        day+=e[1]
      }
    });
  }
  const monthArray = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5]
  const findYearNum = (year) => {
    let yearStr = year.toString().slice(0, -2)
    if (yearStr % 4 === 0) {
      return 6
    } else if (yearStr % 4 === 1) {
      return 4
    } else if (yearStr % 4 === 2) {
      return 2
    } else {
      return 0
    }
  }
  let a = birthYear.toString()
  let b = a[a.length - 2] + a[a.length - 1] //getting last two values
  let yearNum = findYearNum(birthYear) //to find num of year
  let sum = (yearNum + parseInt(b) + parseInt(b / 4) + monthArray[birthMonth - 1] + parseInt(birthDate)) % 7
  const findDay = (year, month) => {
    if (isLeapYear(year)) {
      if (month <= 2) {
        sum -= 1
      }
    }
  }
  findDay(birthYear, birthMonth)
  dayFinal()

  return (
    <div className='cald-div'>
      <InputFields dateFunc={getDate} monthFunc={getMonth} yearFunc={getYear} />
      <p>{errorMsg}</p>
      <div className="txt-div">
        <p className="title">The Day is <span>{day}</span> </p>
      </div>
    </div>
  )
}

export default DayFinder