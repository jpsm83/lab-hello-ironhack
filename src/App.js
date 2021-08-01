import React from "react";
import Header from "./header/Header.component";
import Elements from "./elements/Elements.componet";
import "./App.css";

const App = () => {
  return (
    <div id="mainContainer">
      <Header />
      <div className="elementsContainer">
        <Elements photo="images/icon1.png" title="Declarative" description="React makes it painless to create interactive UIs." />
        <Elements photo="images/icon2.png" title="Components" description="Build encapsulated components that mange their state." />
        <Elements photo="images/icon3.png" title="Single-Way" description="A ser of immutable values are passed to the component's." />
        <Elements photo="images/icon4.png" title="JSX" description="Stativally-typed, designed to run on modern browsers." />
      </div>
    </div>
  );
};

export default App;