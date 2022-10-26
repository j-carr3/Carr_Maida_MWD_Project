import Components from "./Components/Components";
import * as Env from "./Environments.js";
import Parse from "parse";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

// this displays the components
export default function App() {
  return <Components />;
}