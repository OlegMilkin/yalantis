import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setToLocalStorage } from '../redux/action-creators/employees'
import { setAsActive } from '../redux/action-creators/employees'
import { setAsInActive } from '../redux/action-creators/employees'
import classes from '../index.module.css'

interface RadioButtonsProps {
    id: number,
    isActive: boolean
}

const RadioButtons = ({ id, isActive }: RadioButtonsProps) => {
  const dispatch = useDispatch()

  const setActive = () => dispatch(setAsActive(id))

  const setInActive = () => dispatch(setAsInActive(id))

  useEffect(() => {
    dispatch(setToLocalStorage())
  },[isActive, dispatch])

  return (
    <div className={classes.employees__rowItem}>
      <label>
        <input
          type='radio'
          name={id}
          checked={isActive === true}
          onChange={() => {
            setActive()
          }}
          value='true'
        />
        Active
      </label>
      <label>
        <input
          type='radio'
          name={id}
          checked={isActive === false}
          onChange={() => {
            setInActive()
          }}
          value='false'
        />
        Not Active
      </label>
    </div>
  )
}

export default RadioButtons
