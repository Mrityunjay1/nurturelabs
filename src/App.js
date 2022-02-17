
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Router>
        <div >
        <Sidebar>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
        </Sidebar>
        </div>
      </Router>
    </>
  );
}

export default App;
