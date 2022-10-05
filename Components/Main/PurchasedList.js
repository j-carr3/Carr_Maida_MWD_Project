import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

/* 
  TODO: Format table and add headers to each column
  TODO: Add conditional so that only desired items are shown... i.e.
        we are going to have a ToPurchase list as well so only items that are 
        already purchased should show up here
  Currently column headers should be as follows:
  Item Name | Quantity | Price Per Unit | Total Cost
 */
const PurchasedList = ({ purchases }) => {
  return html`
    <div>
      <hr />
      This is the stateless child comonent with list
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
