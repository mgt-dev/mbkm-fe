import { html, render } from "uhtml";

/**
 * @element ch-pie
 *
 * @attr {string} [class]
 */
class ChartPie extends HTMLElement {
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

customElements.define("ch-pie", ChartPie);
