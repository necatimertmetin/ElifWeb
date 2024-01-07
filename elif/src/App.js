import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Navbar from './components/navbar/navbar';
import NotFound from './components/pages/notFound';
import SignIn from './components/pages/signIn';
import AboutUs from './components/pages/aboutUs';
import Radio from './components/pages/radio';
import Contact from './components/pages/contact';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          {/* Navbar sadece belirli sayfalarda gösterilecek */}
          <Switch>
            <Route
              path={["/home", "/aboutUs", "/radio" , "/contact"]}
              exact
              render={(routeProps) => {
                let paletteName;
                // Determine paletteName based on the route
                if (routeProps.location.pathname === "/home") {
                  paletteName = "palette1";
                } else if (routeProps.location.pathname === "/aboutUs") {
                  paletteName = "palette2";
                } else if (routeProps.location.pathname === "/radio") {
                  paletteName = "palette3";
                } else {
                  paletteName = "palette3"; // Set a default palette if needed
                }
                return <Navbar paletteName={paletteName} />;
              }}
            />
          </Switch>

          {/* Sayfa içeriği */}
          <Switch>
            <Route path="/" exact render={() => <Home paletteName="palette1" />} />
            <Route path="/home" exact render={() => <Home paletteName="palette1" />} />
            <Route path="/sign-in" exact render={() => <SignIn paletteName="palette1" />} />
            <Route path="/aboutUs" exact render={() => <AboutUs paletteName="palette2" />} />
            <Route path="/radio" exact render={() => <Radio paletteName="palette3" />} />
            <Route path="/contact" exact render={() => <Contact paletteName="palette1" />} />
            {/* Diğer sayfaların route'larını buraya ekleyin */}
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
