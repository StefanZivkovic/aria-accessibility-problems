import React from "react";
import ReactDOM from "react-dom";
import axe from "@axe-core/react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { MenuItem, Select, InputLabel } from "@material-ui/core";

const BypassRepeatedBlocks = () => (
  <div aria-hidden="true">
    <a href="#select-content" style={{ display: "none" }}>
      bypass repeated blocks
    </a>
  </div>
);
const NavigationSample = () => (
  // we must have <nav> here in order to put content inside landmark. Otherwise we would get issue.
  <nav>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
    </ul>
  </nav>
);

const HomePage = () => <div></div>;

const App = () => (
  // BrowserRouter, Route and <Link> (NavigationSample) are the cause of bypass repeated blocks issue
  <BrowserRouter>
    {/**but with BypassRepeatedBlocks portion of code, it can be solved  */}
    <BypassRepeatedBlocks />
    <NavigationSample />

    <main>
      <Route path="/home" component={HomePage} />
      {/**without <h1> there is heading issue on page loading */}
      <h1>H1</h1>

      <InputLabel id="my-input" style={{ color: "black" }}>
        Sort
      </InputLabel>
      <Select
        id="select-content"
        labelId="my-input"
        value="item1"
        style={{ width: "200px" }}
      >
        <MenuItem key="item1" value="item1">
          item1
        </MenuItem>
        <MenuItem key="item2" value="item2">
          item2
        </MenuItem>
      </Select>
    </main>
  </BrowserRouter>
);
axe(React, ReactDOM, 1000);

ReactDOM.render(<App />, document.getElementById("root"));
