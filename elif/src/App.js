import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Navbar from './components/navbar/navbar';
import NotFound from './components/pages/notFound';
import SignIn from './components/pages/signIn';
import AboutUs from './components/pages/aboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          {/* Navbar sadece belirli sayfalarda gösterilecek */}
          <Switch>
            <Route
              path={["/home", "/aboutUs"]}
              exact
              render={(routeProps) => {
                // Eğer Home sayfasındaysak Navbar'ı gösterme
                if (routeProps.location.pathname === "/home") {
                  return null;
                }
                return <Navbar paletteName={"palette1"} />;
              }}
            />
          </Switch>

          {/* Sayfa içeriği */}
          <Switch>
            <Route path="/" exact render={() => <Home paletteName="palette1" />} />
            <Route path="/home" exact render={() => <Home paletteName="palette1" />} />
            <Route path="/sign-in" exact render={() => <SignIn paletteName="palette1" />} />
            <Route path="/aboutUs" exact render={() => <AboutUs paletteName="palette2" />} />
            {/* Diğer sayfaların route'larını buraya ekleyin */}
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
