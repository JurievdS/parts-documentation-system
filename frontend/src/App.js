import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <main>
        <Route path="/Dashboard" component={Dashboard} />
      </main>
    </Router>
  );
}

export default App;
