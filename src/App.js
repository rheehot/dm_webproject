import { BrowserRouter as Router, Route } from 'react-router-dom';
import Question from './components/question';

function App() {
  return (
    <Router>
      <Route path='/'>
        <Question />
      </Route>
    </Router>
  );
}

export default App; 