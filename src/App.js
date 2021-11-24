import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Employees from './components/Employees'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'}>
          <Redirect to={process.env.PUBLIC_URL + '/employees'} />
        </Route>
        <Route path={process.env.PUBLIC_URL + '/employees'} component={Employees} />
      </Switch>
    </Router>
  )
}

export default App
