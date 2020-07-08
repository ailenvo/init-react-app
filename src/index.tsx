import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.scss";
import $ from "jquery";
import "../src/cores/utils/i18n";

(window as any).jQuery = $;
(window as any).$ = $;
(global as any).jQuery = $;

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//auto update code when release new version
serviceWorker.register({
  onUpdate: sw => {
    if (sw.waiting) {
      sw.waiting.postMessage({ type: "SKIP_WAITING" });

      window.location.reload(true);
      console.log("Update happened.");
    }
  }
});
