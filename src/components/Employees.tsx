import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployees, restoreFromStorage } from '../redux/action-creators/employees'
import EmployeesList from './EmployeesList'
import EmployeesBirthday from './EmployeesBirthday'
import Loader from './common/Loader'
import classes from '../index.module.css'
import {useTypedSelector} from "../hooks/useTypedSelector";

const Employees = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!localStorage.getItem('employeesStorageData')) {
      dispatch(getEmployees())
    } else {
      let dataFromLocalStorage = JSON.parse(localStorage.getItem('employeesStorageData'))
      dispatch(restoreFromStorage(dataFromLocalStorage))
    }
  }, [dispatch])

  const {isLoading} = useTypedSelector(state => state.employees.isLoading)

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    )
  }

  return (
    <div className={classes.employees}>
      <EmployeesList />
      <EmployeesBirthday />
    </div>
  )
}

export default Employees
