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
  const isLogin = useSelector(state => state.members.isLogin); {/* Redux의 기능으로 로그인을 했는지 안했는지에 대한 정보를 불러온다. 하단의 isLogin이 로그인이 되었는지 확인하는 조건이다. */}
  return (
    <div style={{ background: 'url(./backImg.jpg) center/cover no-repeat', height: '100vh', opacity: 0.7 }}>
      <Switch> {/* ReactRouter의 기능중 하나이며 어느 링크로 이동했는지 자동으로 Switch해준다. */}
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