import { BrowserRouter as Router, Route } from 'react-router-dom';
import Question from './components/question';
import Result from './components/result';
import Login from './components/login';

function App() {
  return (
    <div style={{ background: 'url(./backImg.jpg) center/cover no-repeat', height: '100vh' }}>
      <Router>
        <Route exact path='/question'>
          <Question />
        </Route>
        <Route path='/result'>
          <Result />
        </Route>
        <Route exact path='/'>
          <Login />
        </Route>
      </Router>
    </div>
  );
}

export default App; 