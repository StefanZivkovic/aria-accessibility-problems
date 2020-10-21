import React from "react";
import ReactDOM from "react-dom";
import axe from "@axe-core/react";
import { MyCustomElement } from "./MyElem";
const App = () => (
  <main>
    <div>
      <h1>
        Just to overcome ARIA rule for having level-one heading, when on page
        loading
      </h1>
    </div>
    <h2>Expecting errors on opening the select HTML element</h2>
    <MyCustomElement />
  </main>
);
axe(React, ReactDOM, 1000);

ReactDOM.render(<App />, document.getElementById("root"));
