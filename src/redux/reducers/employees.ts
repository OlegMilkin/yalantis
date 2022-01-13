import {EmployeesState, EmployeesActionTypes, EmployeesAction} from "../../types/employees";

let initialState: EmployeesState = {
  employeesList: [],
  isLoading: true,
}

export const employeesReducer = (state = initialState, action: EmployeesAction): EmployeesState => {
  switch (action.type) {
    case EmployeesActionTypes.SET_EMPLOYEES:
      return {
        ...state,
        employeesList: [...action.payload],
      }
    case EmployeesActionTypes.SET_AS_ACTIVE:
      return {
        ...state,
        employeesList: state.employeesList.map((item) =>
          item.id === action.payload ? { ...item, isActive: true } : item,
        ),
      }
    case EmployeesActionTypes.SET_AS_IN_ACTIVE:
      return {
        ...state,
        employeesList: state.employeesList.map((item) =>
          item.id === action.payload ? { ...item, isActive: false } : item,
        ),
      }
    case EmployeesActionTypes.DISABLE_LOADING:
      return {
        ...state,
        isLoading: false,
      }
    case EmployeesActionTypes.SET_TO_LOCAL_STORAGE:
      localStorage.setItem('employeesStorageData', JSON.stringify(state))
      return {
        ...state
      }
    case EmployeesActionTypes.RESTORE_FROM_STORAGE:
      return {
        ...action.payload
      }
    default:
      return state
  }
}


