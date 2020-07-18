import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import CarDetail from "./pages/DetailPage";

import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/detail/:index" component={CarDetail} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
