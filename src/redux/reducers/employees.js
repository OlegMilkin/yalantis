import { employeesAPI } from '../../api/api'
import modifyEmployeesData from '../../helpers/modifyEmployeesData'

const SET_EMPLOYEES = 'SET_EMPLOYEES'
const SET_AS_ACTIVE = 'SET_AS_ACTIVE'
const SET_AS_IN_ACTIVE = 'SET_AS_IN_ACTIVE'
const DISABLE_LOADING = 'DISABLE_LOADING'
const SET_TO_LOCAL_STORAGE = 'SET_TO_LOCAL_STORAGE'
const RESTORE_FROM_STORAGE = 'RESTORE_FROM_STORAGE'

let initialState = {
  employeesList: [],
  isLoading: true,
}

export const employees = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return {
        ...state,
        employeesList: [...action.employees],
      }
    case SET_AS_ACTIVE:
      return {
        ...state,
        employeesList: state.employeesList.map((item) =>
          item.id === action.id ? { ...item, isActive: true } : item,
        ),
      }
    case SET_AS_IN_ACTIVE:
      return {
        ...state,
        employeesList: state.employeesList.map((item) =>
          item.id === action.id ? { ...item, isActive: false } : item,
        ),
      }
    case DISABLE_LOADING:
      return {
        ...state,
        isLoading: false,
      }
    case SET_TO_LOCAL_STORAGE:
      localStorage.setItem('employeesStorageData', JSON.stringify(state))
      return {
        ...state
      }
    case RESTORE_FROM_STORAGE:
      return {
        ...action.data
      }
    default:
      return state
  }
}

export const setEmployees = (employees) => ({
  type: SET_EMPLOYEES,
  employees,
})

export const setAsActive = (id) => ({
  type: SET_AS_ACTIVE,
  id,
})

export const setAsInActive = (id) => ({
  type: SET_AS_IN_ACTIVE,
  id,
})

export const disableLoading = () => ({
  type: DISABLE_LOADING,
})

export const setToLocalStorage = () => ({
  type: SET_TO_LOCAL_STORAGE,
})

export const restoreFromStorage = (data) => ({
  type: RESTORE_FROM_STORAGE,
  data
})

export const getEmployees = () => {
  return async (dispatch) => {
    let response = await employeesAPI.getEmployees()
    dispatch(setEmployees(modifyEmployeesData(response)))
    dispatch(disableLoading())
    dispatch(setToLocalStorage())
  }
}
