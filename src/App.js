import Home from './components/home'
import ScheduleProvider from "./ScheduleProvider"

import './App.css'


function App() {
  return (
      <ScheduleProvider>
        <div className="container">
          <Home/>
        </div>
      </ScheduleProvider>
  )
}

export default App
