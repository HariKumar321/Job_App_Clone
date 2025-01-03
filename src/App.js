import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Masters from './components/Masters'
import Help from './components/Help'
import ForgotPassword from './components/ForgotPassword'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/forgot-password" component={ForgotPassword} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/masters" component={Masters} />
    <ProtectedRoute exact path="/help" component={Help} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
