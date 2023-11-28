import {createContext} from "react"

//Использование паттерна Singleton
const ScheduleContext = createContext({
    schedules: [],
    setSchedules: (value) => {}
})

export default ScheduleContext
