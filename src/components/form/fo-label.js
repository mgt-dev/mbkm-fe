import { html, render } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { cn } from "@/libraries/utilities";

/**
 * @element fo-label
 *
 * @attr {string} for
 * @attr {string} label
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
    render(
      html`
        <label
          for=${ifDefined(this.getAttribute("for"))}
          class=${cn("block mb-1 text-sm font-medium text-gray-900 dark:text-white", this.getAttribute("class"))}
        >
          ${this.getAttribute("label")}
        </label>
      `,
      this
    );
  }
}

customElements.define("fo-label", FormLabel);
