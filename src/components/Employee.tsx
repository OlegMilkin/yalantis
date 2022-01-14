import EmployeeItem from './EmployeeItem'
import { useSelector } from 'react-redux'
import classes from '../index.module.css'
import {FC} from "react";
import {AppStateType} from "../types";

interface EmployeeProp {
  alphabetLetter: string
}

const Employee: FC<EmployeeProp> = ({ alphabetLetter }) => {
  const employeesList = useSelector((state:AppStateType) => state.employees.employeesList)

  let filteredList = employeesList
    .filter((item) => item.firstName[0].toLowerCase() === alphabetLetter)
    .sort((a, b) => a.firstName.localeCompare(b.firstName))

  return (
    <div className={classes.employees__item}>
      <strong className={classes.employees__subHeadline}>{alphabetLetter}</strong>
      {filteredList.length ? (
        filteredList.map((item) => (
          <div className={classes.employees__row} key={item.id}>
            <EmployeeItem
              firstName={item.firstName}
              lastName={item.lastName}
              id={item.id}
              isActive={item.isActive}
            />
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
