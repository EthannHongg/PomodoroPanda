import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

import HomeScreen from "./homescreen";
import ShowAchievements from "./achievements";
import Timer from "./timer";
import Customization from "./customization";

global.points = 0;



function Nav() {
  return (
    <nav>
      <ul>
        
        <Link to='/'>
          <li>HomeScreen</li>
        </Link>

        <Link to='/timer'>
          <li>Timer</li>
        </Link>
        <Link to='/achievements'>
          <li>ShowAchievements</li>
        </Link>
        
      </ul>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomeScreen}/>
          <Route path="/achievements" component={ShowAchievements}/>
          <Route path="/timer" component={Timer}/>
          <Route path="/customization" component={Customization}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;