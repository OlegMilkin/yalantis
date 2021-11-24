import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Employees from './components/Employees'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='https://olegmilkin.github.io/yalantis/'>
          <Redirect to='https://olegmilkin.github.io/yalantis/employees/employees' />
        </Route>
        <Route path='https://olegmilkin.github.io/yalantis/employees' component={Employees} />
      </Switch>
    </Router>
  )
}

export default App
