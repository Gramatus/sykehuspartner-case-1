import { initializeIcons } from "@fluentui/font-icons-mdl2";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MainComponent } from "./MainComponent/MainComponent";

initializeIcons();

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
