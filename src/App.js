import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SnackBar from "./components/utility/SnackBar";

import Beer from "./pages/Beer";
import Tsumami from "./pages/Tsumami";
import Order from "./pages/Order";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AlchoolCheck from "./pages/AlcoholCheck";
import SinglePost from "./pages/SinglePost";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import LogOut from "./pages/LogOut";

function App() {
  const [showSnackBar, setShowSnackBar] = useState(true);
  const handleClick = () => {
    setShowSnackBar(true);
    setTimeout(setShowSnackBar(false), 3000);
  };
  return (
    <Router>
      <Switch>
        <Route path="/beer" component={Beer} />
        <Route path="/tsumami" component={Tsumami} />
        <Route path="/order" component={Order} />
        <Route path="/alchool-check" component={AlchoolCheck} />
        <Route path="/beer-blog" exact component={Blog} />
        <Route path="/beer-blog/:slug" component={SinglePost} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/logout" component={LogOut} />
        <Route path="/" exact component={Home} />
      </Switch>
      <SnackBar />
      <button className={showSnackBar ? "show" : "hide"} onClick={handleClick}>
        Show Snackbar
      </button>
    </Router>
  );
}

export default App;
