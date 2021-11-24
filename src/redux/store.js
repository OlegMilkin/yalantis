import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { employees } from './reducers/employees'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  employees,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
