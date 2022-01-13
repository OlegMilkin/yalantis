import {employeesAPI} from "../../api/api";
import modifyEmployeesData from "../../helpers/modifyEmployeesData";
import {EmployeesActionTypes, EmployeesAction} from "../../types/employees";
import {Dispatch} from "redux";

export const setEmployees = (employees: any[]): EmployeesAction => ({
    type: EmployeesActionTypes.SET_EMPLOYEES,
    payload: employees,
})

export const setAsActive = (id: number): EmployeesAction => ({
    type: EmployeesActionTypes.SET_AS_ACTIVE,
    payload: id,
})

export const setAsInActive = (id: number): EmployeesAction => ({
    type: EmployeesActionTypes.SET_AS_IN_ACTIVE,
    payload: id,
})

export const disableLoading = (): EmployeesAction => ({
    type: EmployeesActionTypes.DISABLE_LOADING,
})

export const setToLocalStorage = (): EmployeesAction => ({
    type: EmployeesActionTypes.SET_TO_LOCAL_STORAGE,
})

export const restoreFromStorage = (data: any): EmployeesAction => ({
    type: EmployeesActionTypes.RESTORE_FROM_STORAGE,
    payload: data
})

export const getEmployees = () => {
    return async (dispatch: Dispatch<EmployeesAction>) => {
        let response = await employeesAPI.getEmployees()
        dispatch(setEmployees(modifyEmployeesData(response)))
        dispatch(disableLoading())
        dispatch(setToLocalStorage())
    }
}