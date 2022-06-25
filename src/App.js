import './App.css';
import Landing from './Pages/Landing';
import Footer from './components/Footer';
import Header from './components/Header';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import CurrentState from './Pages/CurrentState';
import UsedTools from './Pages/UsedTools';

function App() {
  return (
    <Router className="App">
      
        <Header/>
        <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>
          <Route exact path="/current">
            <CurrentState/>
          </Route>
          <Route exact path="/tools">
            <UsedTools/>
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
