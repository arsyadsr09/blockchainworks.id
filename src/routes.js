import React from "react";
import { Route } from "react-router-dom";
import Index from "./pages/index";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={Index} />
      </div>
    );
  }
}

export default Routes;
