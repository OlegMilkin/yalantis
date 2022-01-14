import {FC} from 'react'
import RadioButtons from './RadioButtons'
import classes from '../index.module.css'

interface EmployeeItemProps {
    firstName: string;
    lastName: string;
    id: string,
    isActive: boolean,
}

const EmployeeItem: FC<EmployeeItemProps> = ({ firstName, lastName, id, isActive }) => {
  return (
    <>
      <div className={isActive ? classes.active : undefined}>
        {firstName} {lastName}
      </div>
      <RadioButtons id={id} isActive={isActive} />
    </>
  )
}

export default EmployeeItem
