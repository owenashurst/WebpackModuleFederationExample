import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainNav from "./components/navigation/main-nav";
import Routes from "./routes";

const App = () => {
  return (
    <Router>
      <MainNav>
        <Routes />
      </MainNav>
    </Router>
  );
};

export default App;
