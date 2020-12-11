import { BrowserRouter as Router, Route } from 'react-router-dom';
import Question from './components/question';
import Result from './components/result';

function App() {
  return (
    <div style={{ background: 'url(./backImg.jpg) center/cover no-repeat', height: '100vh' }}>
    <Router>
      <Route exact path='/'>
        <Question />
      </Route>
      <Route path='/result'>
        <Result />
      </Route>
    </Router>
    </div>
  );
}

export default App; 