import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Pages/Login";
import {useSelector} from "react-redux"

function App() {
  return (
    <Router>
      <main>
        <Route path="/" component={Login} />
        {/* <Route path="/Dashboard" component={Dashboard} /> */}
      </main>
    </Router>
  );
}

export default App;
