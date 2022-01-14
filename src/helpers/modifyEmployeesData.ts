import getFullMonthName from './getFullMonthName'
import {IEmployee, IEmployeeWithActiveState} from "../types";


const modifyEmployeesData = (data: IEmployee[]): IEmployeeWithActiveState[]  => (
  data.map((item) => ({
    ...item,
    dob: getFullMonthName(item.dob),
    isActive: false,
  }))
)

export default modifyEmployeesData