import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Beer from "./pages/Beer";
import Tsumami from "./pages/Tsumami";
import Order from "./pages/Order";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AlchoolCheck from "./pages/AlcoholCheck";
import SinglePost from "./pages/SinglePost";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import LogOut from "./pages/LogOut";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/beer" component={Beer} />
        <Route path="/tsumami" component={Tsumami} />
        <Route path="/order" component={Order} />
        <Route path="/auth" component={Auth} />
        <Route path="/alchool-check" component={AlchoolCheck} />
        <Route path="/beer-blog" exact component={Blog} />
        <Route path="/:slug" component={SinglePost} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/logout" component={LogOut} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
