import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

/* 
  TODO: Hide usernames and passwords, just showing what would be in the backend for now
        Separate this into its own page that is used for authentification purposes
 */
const UsersList = ({ users }) => {
  return html`
    <div>
      <hr />
      <ul>
        ${users.map(
          (user) =>
            html` <li key="${user}">
              ${user.username} | ${user.password}
            </li>`
        )}
      </ul>
    </div>
  `;
};

export default UsersList;
