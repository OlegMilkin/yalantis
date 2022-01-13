import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import EmployeesActionCreators from '../redux/action-creators/'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(EmployeesActionCreators, dispatch)
}