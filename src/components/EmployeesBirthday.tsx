import {FC} from 'react'
import { useSelector } from 'react-redux'
import MonthSection from './MonthSection'
import classes from '../index.module.css'
import {month} from '../types'
import {AppStateType} from '../types'

const EmployeesBirthday: FC = () => {
  const month: month= [
    'november',
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
  ]

  const employeesList = useSelector((state: AppStateType) => state.employees.employeesList)
  const isActiveIncludes = employeesList.some((item) => item.isActive)

  return (
    <div className={classes.employees__birthday}>
      <h2 className={classes.employees__headline}>Employees birthday</h2>
      {isActiveIncludes
        ? month.map((item) => <MonthSection key={item} monthName={item} />)
        : 'Employees List is empty'}
    </div>
  )
}

export default EmployeesBirthday
