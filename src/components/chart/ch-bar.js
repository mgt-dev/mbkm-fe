import { html, render } from "uhtml";

/**
 * @element ch-bar
 *
 * @attr {string} [class]
 */
class ChartBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    render(this, html``);
  }
}

customElements.define("ch-bar", ChartBar);
