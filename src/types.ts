export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    dob: string;
}

export interface IEmployeeWithActiveState extends IEmployee {
    isActive: boolean
}

export interface AppStateType {
    employees: {
        employeesList: Array<IEmployeeWithActiveState>;
        isLoading: boolean
    }
}

export type alphabet = Array<string>

export type month = Array<string>

