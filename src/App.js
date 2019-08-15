import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
  return (
    <div>
      <h2>Hats Page</h2>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
        {/* <Route path="/shop/jackets" component={JacketsPage} /> */}
        {/* <Route path="/shop/sneakers" component={SneakersPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
