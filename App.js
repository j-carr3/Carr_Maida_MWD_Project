import {
  html,
  render
} from "https://unpkg.com/htm/preact/standalone.module.js";
import Purchased from "./Components/Main/Purchased.js";
import Users from "./Componenets/Main/LogIn.js";

function App() {
  return html`<${Purchased} /> <${Users} />`;
}

render(html` <${App} /> `, document.getElementById("app"));
