import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Beer from "./pages/Beer";
import Tsumami from "./pages/Tsumami";
import Order from "./pages/Order";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Cocktail from "./pages/Cocktail";
import AlchoolCheck from "./pages/AlchoolCheck";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/beer" component={Beer} />
        <Route path="/tsumami" component={Tsumami} />
        <Route path="/order" component={Order} />
        <Route path="/auth" component={Auth} />
        <Route path="/cocktail" component={Cocktail} />
        <Route path="/alchool-check" exact component={AlchoolCheck} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
