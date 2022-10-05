// this is a child component containing the log in form

import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

// TODO: Clean up formatting of form so that it looks more uniform
const LogInForm = () => {
  return html`
    <div class="container">
      <form>
        <h1>Log In</h1>
        <div class="field">
          <label for="username">Username: </label>
          <input type="text" id="username" name="username" />
        </div>
        <div class="field">
          <label for="password">Password: </label>
          <input type="text" id="password" name="password" />
        </div>
        <div class="field">
          <button type="submit" class="full">Submit</button>
        </div>
      </form>
    </div>
  `;
};

export default LogInForm;
