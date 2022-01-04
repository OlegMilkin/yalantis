import RadioButtons from './RadioButtons'
import classes from '../index.module.css'

const EmployeeItem = ({ firstName, lastName, id, isActive }) => {
  return (
    <>
      <div className={isActive ? classes.active : null}>
        {firstName} {lastName}
      </div>
      <RadioButtons id={id} isActive={isActive} />
    </>
  )
}

export default EmployeeItem
