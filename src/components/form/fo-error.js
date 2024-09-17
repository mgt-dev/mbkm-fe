import { html, render } from "lit-html";
import { cn } from "@/libraries/utilities";

/**
 * @element fo-error
 *
 * @attr {string} name
 * @attr {string} [error]
 * @attr {string} [class]
 */
class FormError extends HTMLElement {
  constructor() {
    super();
    this.component = null;
  }

  connectedCallback() {
    this.renderTemplate();
    this.component = this.querySelector("p");
  }

  static get observedAttributes() {
    return ["error"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.component || oldValue === newValue) return;
    this.renderTemplate();
  }

  renderTemplate() {
    render(
      html`
        <p class=${cn("text-red-500 text-xs mt-1", this.getAttribute("class"), !this.getAttribute("error") && "hidden")}>${this.getAttribute("error")}</p>
      `,
      this
    );
  }
}

customElements.define("fo-error", FormError);
