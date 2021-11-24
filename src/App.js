import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Employees from './components/Employees'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/yalantis'>
          <Redirect to='/yalantis/employees' />
        </Route>
        <Route path='/yalantis/employees' component={Employees} />
        <Route path='*'>
          <div>404 Not Found</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
