


import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Main from './components/main/Main'
import NotFound from './components/NotFound/NotFound'
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard-template/styles/shards-dashboards.1.1.0.min.css";
import "./styles/app.css"


export default function () {
  return (
    <Switch>
      <Route exact path="/" render={() => (
        <Redirect to="/login" />
      )} />
      <Route exact path="/register" render={() => (<Register component={Register} />)} />
      <Route exact path="/login" render={() => (<Login component={Login} />)} />
      <Route path="/secretNotes" render={() => (<Main component={Main} />)} />
      <Route path="" component={NotFound} />
    </Switch>

  )

}