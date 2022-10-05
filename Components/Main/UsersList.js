import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

/* 
  TODO: Format table and add headers to each column
  TODO: Add conditional so that only desired items are shown... i.e.
        we are going to have a ToPurchase list as well so only items that are 
        already purchased should show up here
  Currently column headers should be as follows:
  Item Name | Quantity | Price Per Unit | Total Cost
 */
const UsersList = ({ users }) => {
  return html`
    <div>
      <hr />
      <ul>
        ${users.map(
          (
            user // Not sure why the formatting isn't working in the following html strip when I try to add spaces where appropriate
          ) =>
            html` <li key="${user}">
              ${user.username} | ${user.password}
            </li>`
        )}
      </ul>
    </div>
  `;
};

export default UsersList;
