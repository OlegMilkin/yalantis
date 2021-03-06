import React, {FC} from 'react';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setToLocalStorage } from '../redux/reducers/employees'
import { setAsActive } from '../redux/reducers/employees'
import { setAsInActive } from '../redux/reducers/employees'
import classes from '../index.module.css'

interface RadioButtonsProps {
    id: string;
    isActive: boolean;
}

const RadioButtons: FC<RadioButtonsProps> = ({ id, isActive }) => {
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
          checked={isActive}
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
          checked={!isActive}
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
