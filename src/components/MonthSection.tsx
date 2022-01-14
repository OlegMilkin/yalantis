import { useSelector } from 'react-redux'
import classes from '../index.module.css'
import {FC} from "react";
import {AppStateType} from "../types";

interface MonthSectionProps {
  monthName: string
}

const MonthSection: FC<MonthSectionProps> = ({ monthName }) => {
  const employeesList = useSelector((state: AppStateType) => state.employees.employeesList)

  let filteredList = employeesList
    .filter((item) => item.dob === monthName && item.isActive)
    .sort((a, b) => a.lastName.localeCompare(b.lastName))

  return (
    <div className={classes.employees__monthRow}>
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
