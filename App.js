import {
  html,
  render
} from "https://unpkg.com/htm/preact/standalone.module.js";
import Purchased from "./Components/Main/Purchased.js";

function App() {
  return html`<${Purchased} />`;
}

render(html` <${App} /> `, document.getElementById("app"));
