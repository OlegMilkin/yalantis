import EmployeeItem from './EmployeeItem'
import classes from '../index.module.css'
import {useTypedSelector} from "../hooks/useTypedSelector";

interface EmployeeProps {
  alphabetLetter: string
}

const Employee = ({ alphabetLetter } : EmployeeProps) => {

  const {employeesList} = useTypedSelector(state => state.employees.employeesList)

  let filteredList = employeesList
    .filter((item) => item.firstName[0].toLowerCase() === alphabetLetter)
    .sort((a, b) => a.firstName.localeCompare(b.firstName))

  return (
    <div className={classes.employees__item}>
      <strong className={classes.employees__subHeadline}>{alphabetLetter}</strong>
      {filteredList.length ? (
        filteredList.map((item) => (
          <div className={classes.employees__row} key={item.id}>
            <EmployeeItem {...item} />
          </div>
        ))
      ) : (
        <div className={classes.employees__rowEmpty}>
          No Employees
          <img src="https://icon-library.com/images/sad-faces-icon/sad-faces-icon-20.jpg" alt=""/>
        </div>
      )}
    </div>
  )
}

export default Employee
