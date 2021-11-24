import RadioButtons from './RadioButtons'

const EmployeeItem = ({ firstName, lastName, id, isActive }) => {
  return (
    <div>
      <div className={isActive ? 'active' : null}>
        {firstName} {lastName}
      </div>
      <RadioButtons id={id} isActive={isActive} />
    </div>
  )
}

export default EmployeeItem
