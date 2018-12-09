import React from "react";
import ReactDOM from "react-dom";
import SimpleModal from "./SimpleModal";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <SimpleModal buttonText="Open Simple Modal">
        <div>
          <h1>Voilà!</h1>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <a href="https://codepen.io/timothylong/pen/HhAer/" target="_blank">
              Styling credits.
            </a>
            <br />
            <a href="https://github.com/loq24" target="_blank">
              Hire me!
            </a>
          </div>
        </div>
      </SimpleModal>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
