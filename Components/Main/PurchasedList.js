import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

/* 
  TODO: Format table and add headers to each column
  TODO: Add conditional so that only desired items are shown... i.e.
        we are going to have a ToPurchase list as well so only items that are 
        already purchased should show up here
        We also need to refactor in order to clarify which list is showing the items that
        still need to be bought and items that have already been purchased based on file names
  Currently column headers should be as follows:
  Item Name | Quantity | Price Per Unit | Total Cost
 */
const PurchasedList = ({ purchases }) => {
  return html`
    <div>
      <hr />
      <ul>
        ${purchases.map(
          (
            purchase // Not sure why the formatting isn't working in the following html strip when I try to add spaces where appropriate
          ) =>
            html` <li key="${purchase}">
              ${purchase.itemName} | ${purchase.pricePerUnit} |
              ${purchase.quantity} |
              ${purchase.pricePerUnit * purchase.quantity}
            </li>`
        )}
      </ul>
    </div>
  `;
};

export default PurchasedList;
