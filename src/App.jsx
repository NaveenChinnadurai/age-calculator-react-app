import './App.css'
import DayFinder from './components/dayFinder'

function App() {
  const currDay = new Date();
  const currentDate = currDay.getDate()
  const currentMonth = currDay.getMonth()
  const currentYear = currDay.getFullYear()

  return (
    <div className="app">
      <h2>Day Finder</h2>
      <DayFinder yr={currentYear} />
    </div>
  )
}

export default App
