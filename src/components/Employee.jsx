import EmployeeItem from './EmployeeItem'
import { useSelector } from 'react-redux'

const Employee = ({ alphabetLetter }) => {
  const employeesList = useSelector((state) => state.employees.employeesList)

  let filteredList = employeesList
    .filter((item) => item.firstName[0].toLowerCase() === alphabetLetter)
    .sort((a, b) => a.firstName.localeCompare(b.firstName))

  return (
    <div className='employees__item'>
      <strong>{alphabetLetter}</strong>
      {filteredList.length ? (
        filteredList.map((item) => (
          <div key={item.id}>
            <EmployeeItem {...item} />
          </div>
        ))
      ) : (
        <div>No Employees</div>
      )}
    </div>
  )
}

export default Employee
