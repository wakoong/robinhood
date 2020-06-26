// React imports
import * as React from "react";
import ReactDOM from "react-dom";
// My imports
import { Layout } from "../styles";
import Login from "./Login";

const App = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
