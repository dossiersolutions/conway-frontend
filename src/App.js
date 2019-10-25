import React from 'react';
import './App.css';
import MainScreen from "./MainScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Router>

          <Switch>
            <Route path="/">
              <MainScreen/>
            </Route>
            <Route path="/newGame">
              <MainScreen/>
            </Route>
            <Route path="/game:gameId">
              <MainScreen/>
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
