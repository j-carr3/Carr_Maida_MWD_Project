//This is the parent component for the Log In and User List
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

  // display the user list for now just to make sure it works
  return html`
    <div>
      <${UsersList} users=${users} />
      <${LogInForm} />
    </div>
  `;
};

export default LogIn;
