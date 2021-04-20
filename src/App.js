import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React from 'react-bootstrap'
import Navigationbar from './components/Navigationbar'
import JobDetail from './components/JobDetail'
import JobsList from './components/JobsList'


const Test = () => {
  return <div>Test</div>;
};

const Login = () => {
  return <div>Login</div>;
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/login"> Login Page! </Link>
      <Link to="/test"> Testing Page! </Link>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Switch>
        <Route path="/test" component={Test} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/jobs" component={JobsList} />
        <Route path="/jobs/:id" component={JobDetail} />
      </Switch>
    </div>
  );
}

export default App;
