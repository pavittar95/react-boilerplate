import React, { Fragment } from "react";
import { Switch } from "react-router-dom";
import AppRoute from "./appRoute";
import Blogs from "../container/blogs";
import Dashboard from "../container/dashboard";
import Home from "../container/home";
import Login from "../container/login";
import Employee from "../container/employee";
import CreateTournament from "../container/tournament/create";
import NotFound from "../container/notFound";
export default function index() {
  return (
    <Switch>
      <AppRoute exact path="/" layout={Fragment} component={Home} />
      <AppRoute path="/login" layout={Fragment} component={Login} />
      <AppRoute path="/dashboard" layout={Fragment} component={Dashboard} />
      <AppRoute path="/blogs" layout={Fragment} component={Blogs} />
      <AppRoute path="/employee" layout={Fragment} component={Employee} />
      <AppRoute path="/tournament/create" layout={Fragment} component={CreateTournament} />
      <AppRoute path="*" layout={Fragment} component={NotFound} />
    </Switch>
  );
}
