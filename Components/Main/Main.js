import {
  html,
  useEffect,
  useState
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getAllUsers } from "../../Services/Users.js";
import MainList from "./MainList.js";

const Main = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return html`
    <div>
      <h1>Feature 3 Kickoff</h1>
      This is the stateful parent component.
      <${MainList} users=${users} />
    </div>
  `;
};

export default Main;
