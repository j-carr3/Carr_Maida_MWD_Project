import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

const PurchaseForm = () => {
  return html`
    <div class="container">
      <form>
        <h1>Purchase Form</h1>
        <div class="field">
          <label for="itemName">Item:</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            placeholder="Enter the item you purchased"
          />
        </div>
        <div class="field">
          <label for="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Enter a number"
          />
        </div>
        <div class="field">
          <label for="pricePerUnit">Price Per Unit:$</label>
          <input
            type="number"
            id="pricePerUnit"
            name="pricePerUnit"
            placeholder="Enter a price in $"
          />
        </div>
        <div class="field">
          <button type="submit" class="full">Submit</button>
        </div>
      </form>
    </div>
  `;
};

export default PurchaseForm;
