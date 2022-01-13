export interface EmployeesState {
    employeesList: any[],
    isLoading: boolean
}

export enum EmployeesActionTypes {
    SET_EMPLOYEES = 'SET_EMPLOYEES',
    SET_AS_ACTIVE = 'SET_AS_ACTIVE',
    SET_AS_IN_ACTIVE = 'SET_AS_IN_ACTIVE',
    DISABLE_LOADING = 'DISABLE_LOADING',
    SET_TO_LOCAL_STORAGE = 'SET_TO_LOCAL_STORAGE',
    RESTORE_FROM_STORAGE = 'RESTORE_FROM_STORAGE',
}

interface setEmployeesAction {
    type: EmployeesActionTypes.SET_EMPLOYEES,
    payload: any[],
}

interface setAsActiveAction {
    type: EmployeesActionTypes.SET_AS_ACTIVE,
    payload: number
}

interface setAsInActiveAction {
    type: EmployeesActionTypes.SET_AS_IN_ACTIVE,
    payload: number
}

interface disableLoadingAction {
    type: EmployeesActionTypes.DISABLE_LOADING,
}

interface setToLocalStorageAction {
    type: EmployeesActionTypes.SET_TO_LOCAL_STORAGE,
}

interface restoreFromStorageAction {
    type: EmployeesActionTypes.RESTORE_FROM_STORAGE,
    payload: any
}

export type EmployeesAction =
    setEmployeesAction |
    setAsActiveAction |
    setAsInActiveAction |
    disableLoadingAction |
    setToLocalStorageAction |
    restoreFromStorageAction

