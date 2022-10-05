import {
  html,
  useEffect,
  useState
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getAllUsers } from "../../Services/Users.js";
import UsersList from "./UsersList.js";
import LogInForm from "./LogInForm.js";

const LogIn = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return html`
    <div>
      <${UsersList} users=${users} />
      <${LogInForm} />
    </div>
  `;
};

export default LogIn;
