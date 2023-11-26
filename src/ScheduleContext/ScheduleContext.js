import {createContext} from "react"

const ScheduleContext = createContext({
    schedules: [],
    setSchedules: (value) => {}
})

export default ScheduleContext
