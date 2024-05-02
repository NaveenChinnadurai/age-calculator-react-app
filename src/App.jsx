import { useState } from 'react';
import './App.css'
import AgeCalculator from './components/ageCalculator'
import DayFinder from './components/dayFinder'
import Input from './components/input';

function App() {
  const [dateInput, setDateInput] = useState("0")
  const [monthInput, setMonthInput] = useState("0")
  const [yearInput, setYearInput] = useState("0")

  const inputDate = new Date(yearInput, monthInput - 1, dateInput);

  const [clicks, setClicks] = useState(1);
  const handleBtnClick = () => {
    setClicks(clicks + 1);
  }
  return (
    <div className="app">
      <div className="header">
        <h2>
          { clicks % 2 === 0 ?"Age Calculator":"Day Finder" }
        </h2>
        <button onClick={handleBtnClick} className='change-btn'>{ clicks % 2 === 0 ?"Day Finder" : "Age Calculator"}</button>
      </div>
      <div className="container">
        <Input getDate={setDateInput} getMonth={setMonthInput} getYear={setYearInput} />
        { clicks % 2 === 0 ?<AgeCalculator date={inputDate} />:<DayFinder date={inputDate} /> }
      </div>
    </div>
  )
}
export default App;
