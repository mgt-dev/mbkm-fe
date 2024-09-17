import { html, render } from "uhtml";
import { cn } from "@/libraries/utilities";

/**
 * @element fo-label
 *
 * @attr {string} label
 * @attr {string} [for]
 * @attr {string} [class]
 */
class FormLabel extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    if (this.hasAttribute("for")) {
      render(
        this,
        html`
          <label for=${this.getAttribute("for")} class=${cn("block mb-1 text-sm font-medium text-gray-900", this.getAttribute("class"))}>
            ${this.getAttribute("label")}
          </label>
        `
      );
    } else {
      render(this, html` <div class=${cn("block mb-1 text-sm font-medium text-gray-900", this.getAttribute("class"))}>${this.getAttribute("label")}</div> `);
    }
  }
}

customElements.define("fo-label", FormLabel);
