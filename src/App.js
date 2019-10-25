import React from 'react';
import './App.css';
import MainScreen from "./MainScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {GameScreen} from "./GameScreen";

function App() {
  return (
      <div className="App">
        <Router>

          <Switch>
            <Route path="/newGame">
              <MainScreen/>
            </Route>
            <Route path="/game/:gameId">
              <GameScreen/>
            </Route>
            <Route path="/">
              <MainScreen/>
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
