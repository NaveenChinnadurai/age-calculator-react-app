import { useState } from 'react';
import './App.css'
import Calander from './components/calander'
import DayFinder from './components/dayFinder'

function App() {
  const currDay = new Date();
  const currentDate = currDay.getDate()
  const currentMonth = currDay.getMonth()
  const currentYear = currDay.getFullYear()

  function DayFinderCompo() {
    return (
      <div className="dayfinder">
        <div className="dayfinder-header">
          <h2>Day Finder</h2>
          <button onClick={() =>  setArea(<CalenderComp/>)} className='change-btn'>Age Calc</button>
        </div>
        <DayFinder yr={currentYear} />
      </div>
    )
  }
  function CalenderComp() {
    return (
      <div className="dayfinder">
        <div className="dayfinder-header">
          <h2>Age Calculator</h2>
          <button onClick={() =>  setArea(<DayFinderCompo/>) } className='change-btn'>Day Finder</button>
        </div>
        <Calander currDate={currentDate} currMon={currentMonth} currYr={currentYear} />
      </div>
    )
  }
  const [area, setArea] = useState(<DayFinderCompo />)
  return (
    <div className="app">
      {area}
    </div>
  )
}
export default App
