import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

// TODO: Clean up formatting of form so that it looks more uniform
const ToPurchaseForm = () => {
  return html`
    <div class="container">
      <form>
        <h1>To Purchase Form</h1>
        <div class="field">
          <label for="itemName">Item To Purchase: </label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            placeholder="Enter the item"
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
          <label for="pricePerUnit">Price Per Unit: </label>
          <input
            type="number"
            id="pricePerUnit"
            name="pricePerUnit"
            placeholder="Enter a price in $"
          />
        </div>
        <div class="field">
          <button onClick=${onSubmitClick}>
            ${data} type="submit" class="full">Submit
          </button>
        </div>
      </form>
    </div>
  `;
};

export default ToPurchaseForm;
