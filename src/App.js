import { Switch, Route, Redirect } from 'react-router-dom'
import Employees from './components/Employees'

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/employees' />
      </Route>
      <Route path='/employees' component={Employees} />
      <Route path='*'>
        <div>404 Not Found</div>
      </Route>
    </Switch>
  )
}

export default App
