import React from "react";
import Home from "./components/Template/Home";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import SignIn from "./components/Template/SignIn";
import SignUp from "./components/Template/SignUp";
import ForgotPassword from "./components/Template/ForgotPassword";
import Privacy from "./components/Template/Privacy";

function App() {
  return (
    <Switch>
      <Route exact path="/premium-themes/onepirate" component={Home} />
      <Route
        exact
        path="/premium-themes/onepirate/sign-in"
        component={SignIn}
      />
      <Route
        exact
        path="/premium-themes/onepirate/sign-up"
        component={SignUp}
      />
       <Route
        exact
        path="/premium-themes/onepirate/forgot-password"
        component={ForgotPassword}
      />
      <Route
        exact
        path="/premium-themes/onepirate/privacy"
        component={Privacy}
      />
    </Switch>
  );
}
export default App;
