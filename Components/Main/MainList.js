import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

const MainList = ({ users }) => {
  return html`
    <div>
      <hr />
      This is the stateless child comonent with list
      <ul>
        ${users.map(
          (user) =>
            html` <li key="${user}">
              ${user.email} | ${user.firstName} ${user.lastName}
            </li>`
        )}
      </ul>
    </div>
  `;
};

export default MainList;
