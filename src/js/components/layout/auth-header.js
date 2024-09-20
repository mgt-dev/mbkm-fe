import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@4.5.11/+esm";
/**
 * @element auth-header
 */
class AuthHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    render(
      this,
      html`
        <header>
          <h1>Header</h1>
          <nav>
            <ui-link href="dashboard/">Dashboard</ui-link>
            <ui-link href="component/">Component</ui-link>
            <ui-link href="form/">Form</ui-link>
            <ui-link href="table/">Table</ui-link>
            <ui-link href="user/">User</ui-link>
            <ui-link href="logout/">Logout</ui-link>
          </nav>
        </header>
      `
    );
  }
}

customElements.define("auth-header", AuthHeader);
