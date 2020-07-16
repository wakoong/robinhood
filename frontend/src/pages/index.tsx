// React imports
import * as React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
// My imports
import { Layout } from "../styles";
import Login from "./Login";
import Home from "./Home";

const App = () => {
  return (
    <Layout>
      <Router>
        <Login path="/" />
        <Home path="/home" />
      </Router>
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
