import {
  html,
  render
} from "https://unpkg.com/htm/preact/standalone.module.js";
import Purchased from "./Components/Main/Purchased.js";
import LogIn from "./Components/Main/LogIn.js";

function App() {
  return html`<${Purchased} /> <${LogIn} />`;
}

render(html` <${App} /> `, document.getElementById("app"));
