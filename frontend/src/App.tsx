import React from "react";
import "./styles/App.less";
import LayoutAntD from "./components/LayoutAntD/LayoutAntD";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "context/ScrollToTop";
import Home from "views/Home";
import Presale from "views/Presale";
import Swap from "views/Trade/Swap";
import Liquidity from "views/Trade/Liquidity";

function App() {
  return (
    <Router>
      <LayoutAntD>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/presale" component={Presale} />
          <Route path="/trade/swap" component={Swap} />
          <Route path="/trade/liquidity" component={Liquidity} />
        </Switch>
      </LayoutAntD>
    </Router>
  );
}

export default App;
