import { useSelector } from 'react-redux'

const MonthSection = ({ monthName }) => {
  const employeesList = useSelector((state) => state.employees.employeesList)

  let filteredList = employeesList
    .filter((item) => item.dob === monthName && item.isActive === true)
    .sort((a, b) => a.lastName.localeCompare(b.lastName))

  return (
    <div className='monthSection'>
      <strong>{monthName}</strong>
      {filteredList.length ? (
        filteredList.map((item) => (
          <div key={item.id}>
            {item.firstName} {item.lastName}
          </div>
        ))
      ) : (
        <div>No Employees</div>
      )}
    </div>
  )
}

export default MonthSection
