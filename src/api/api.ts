import axios, { AxiosResponse } from 'axios'
import {IEmployee} from "../types";

const instance = axios.create({
  baseURL: 'https://yalantis-react-school-api.yalantis.com/',
})

export const employeesAPI = {
  getEmployees() {
    return instance.get<IEmployee[]>('api/task0/users').then((response: AxiosResponse) => response.data)
  },
}
