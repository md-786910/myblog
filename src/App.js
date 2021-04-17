import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Navbar from "./Navbar";
import User from "./User";
import About from "./About";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
function App() {
  return (

    <>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" component={Navbar, Home} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/user/:fname/:lname" component={User} exact />
      </Switch>
    </>
  );

}

export default App;
