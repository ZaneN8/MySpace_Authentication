import React from "react";
import { Route, Switch } from "react-router-dom";
import FetchUser from "./components/FetchUser";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Login from "./components/Login";
import NavBar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";
import SamplesDemo from "./samples/SamplesDemo";

function App() {
  return (
    <>
      <NavBar />
      <>
        <FetchUser>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/samplesDemo" component={SamplesDemo} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </>
    </>
  );
}

export default App;
