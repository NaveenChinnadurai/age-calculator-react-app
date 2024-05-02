import React from 'react'
import './../styles/calender.css'

function DayFinder(props) {

  const date = props.date.getDate();
  const month = props.date.getMonth();
  const year = props.date.getFullYear();

  function getDay(year, month, date) {
    const inputDate = new Date(year, month , date);
    const dayIndex = inputDate.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  }

  const day = getDay(year, month, date);

  return (
    <div className='txt-div'>
      <p className="title">The Day is {day}</p>
    </div>
  )
}

export default DayFinder



/* Logic using aptitude 
  const isLeapYear = (year) => {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      if (year % 4 === 0) {
        return true
      }
      else {
        return false
      }
    }
  }

  //for day predictor
  const dayArray = [
    [0, 'Sunday'],
    [1, 'Monday'],
    [2, 'Tuesday'],
    [3, 'wednesday'],
    [4, 'Thursday'],
    [5, 'Friday'],
    [6, 'Saturday']
  ]
  var day = ""
  const dayFinal = () => {
    dayArray.forEach(e => {
      if (sum === e[0]) {
        day += e[1]
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
  let a = year.toString()
  let b = a[a.length - 2] + a[a.length - 1] //getting last two values
  let yearNum = findYearNum(year) //to find num of year
  let sum = (yearNum + parseInt(b) + parseInt(b / 4) + monthArray[month - 1] + parseInt(date)) % 7
  const findDay = (year, month) => {
    if (isLeapYear(year) && month <= 2) {
      sum -= 1
    }
  }
  findDay(year, month)
  dayFinal()
*/

