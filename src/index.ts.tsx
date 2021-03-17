import * as React from "react";
import * as ReactDOM from "react-dom";
import { MainComponent } from "./MainComponent/MainComponent";

async function startup(): Promise<void> {
  if (!document.body || document.readyState == "loading") {
    console.debug("Body not loaded");
    setTimeout(function () {
      startup();
    }, 500);
    return;
  }
  const container = document.getElementById("somecontainer");
  if (container) {
    console.debug("Container found");
    ReactDOM.render(<MainComponent />, container);
  } else {
    console.debug("Container not found!");
  }
}
startup();
