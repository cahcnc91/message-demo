import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Main from "./components/Main";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Paper } from "@material-ui/core/";
import PrivateRoute from './components/common/PrivateRoute'


class App extends Component {
  render() {
    return (
      <Router>
        <Paper style={{ height: "100vh", margin: 0, boxSizing: "border-box" }}>
          <div style={{ height: "12vh" }}>
            <Navbar />
          </div>
          <Route exact path="/" component={Login}/>
          <Route exact path="/register" component={Register} />
          <Switch>
            
            <PrivateRoute exact path="/app" component={Main} />
          </Switch>
          <div style={{ height: "8vh" }}>
            <Footer />
          </div>
        </Paper>
      </Router>
    );
  }
}

export default App;
