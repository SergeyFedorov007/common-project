import ScheduleContext from "../ScheduleContext/ScheduleContext"
import {useState} from "react";

//использование паттерна Provider
const ScheduleProvider = ({children} ) => {
    const [schedules, setSchedules ] = useState([])

    const setSchedulesFunc = (value) => {
        setSchedules(value)
    }


    return <ScheduleContext.Provider value={{schedules, setSchedules: setSchedulesFunc}}>
        {children}
    </ScheduleContext.Provider>
}

export default ScheduleProvider
