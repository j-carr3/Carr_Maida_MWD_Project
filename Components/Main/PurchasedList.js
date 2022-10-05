import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

const PurchasedList = ({ purchases }) => {
  return html`
    <div>
      <hr />
      This is the stateless child comonent with list
      <ul>
        ${purchases.map(
          (purchase) =>
            html` <li key="${purchase}">
              ${purchase.itemName} | ${purchase.pricePerUnit}
              ${purchase.quantity}
            </li>`
        )}
      </ul>
    </div>
  `;
};

export default PurchasedList;
