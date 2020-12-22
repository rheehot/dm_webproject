// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect, Route, Switch } from "react-router";
import Question from './components/question';
import Result from './components/result';
import Login from './components/login';
import SignUp from './components/signUp';
import CreateProfile from './components/createProfile';
import LoginSign from './components/loginSign';
import Menu from "./components/menu";

import { useSelector } from 'react-redux';

function App() {
  const isLogin = useSelector(state => state.members.isLogin);
  return (
    <div style={{ background: 'url(./backImg.jpg) center/cover no-repeat', height: '100vh', opacity: 0.7 }}>
      <Switch>
        <Route exact path='/'>
          {isLogin === true ? <Redirect to='/selectMenu' /> : <Login />}
        </Route>
        <Route path='/signUp' component={SignUp} />
        {isLogin === true ? <Route path='/selectMenu' component={Menu} /> : <LoginSign />}
        {isLogin === true ? <Route path='/createProfile' component={CreateProfile} /> : <LoginSign />}
        {isLogin === true ? <Route path='/question' component={Question} /> : <LoginSign />}
        {isLogin === true ? <Route path='/result' component={Result} /> : <LoginSign />}
      </Switch>
    </div>
  );
}

export default App;