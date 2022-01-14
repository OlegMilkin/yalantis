import {FC, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployees, restoreFromStorage } from '../redux/reducers/employees'
import EmployeesList from './EmployeesList'
import EmployeesBirthday from './EmployeesBirthday'
import Loader from './common/Loader'
import classes from '../index.module.css'
import {AppStateType} from '../types'

const Employees: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!localStorage.getItem('employeesStorageData')) {
      dispatch(getEmployees())
    } else {
      let dataFromLocalStorage = JSON.parse(localStorage.getItem('employeesStorageData') || "")
      dispatch(restoreFromStorage(dataFromLocalStorage))
    }
  }, [dispatch])

  const isLoading = useSelector((state: AppStateType) => state.employees.isLoading)

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
