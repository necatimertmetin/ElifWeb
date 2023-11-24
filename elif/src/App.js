import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Navbar from './components/navbar/navbar';
import NotFound from './components/pages/notFound';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Navbar paletteName={"palette1"} />
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Home paletteName="palette1" />}
            />
            <Route
              path="/home"
              exact
              render={() => <Home paletteName="palette1" />}
            />
            {/* Add other routes for different pages if needed */}
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
