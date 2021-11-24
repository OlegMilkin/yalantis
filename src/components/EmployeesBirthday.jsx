import { useSelector } from 'react-redux'
import MonthSection from './MonthSection'

const EmployeesBirthday = () => {
  const month = [
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

  const employeesList = useSelector((state) => state.employees.employeesList)
  const isActiveIncludes = employeesList.some((item) => item.isActive === true)

  return (
    <div className='employees__birthday'>
      <h2>Employees birthday</h2>
      {isActiveIncludes
        ? month.map((item) => <MonthSection key={item} monthName={item} />)
        : 'Employees List is empty'}
    </div>
  )
}

export default EmployeesBirthday
