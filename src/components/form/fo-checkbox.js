import { cn } from "@/libraries/utilities";
import { html, render } from "uhtml";
import "iconify-icon";
import "./fo-label";

/**
 * @element fo-checkbox
 *
 * @attr {string} [class]
 * @attr {string} [label]
 * @attr {string} [name]
 * @attr {string} [value]
 * @attr {boolean} [checked]
 * @ttr {boolean} [disabled]
 */
class FormCheckbox extends HTMLElement {
  constructor() {
    super();
    this.component = null;
  }

  connectedCallback() {
    this.renderTemplate();
    this.component = this.querySelector("input");
  }

  static get observedAttributes() {
    return ["disabled", "checked", "class"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.component || oldValue === newValue) return;
    this.renderTemplate();
  }

  renderTemplate() {
    render(
      this,
      html`
        <div class="relative flex items-center gap-1">
          <input
            type="checkbox"
            name=${this.getAttribute("name")}
            value=${this.getAttribute("value")}
            ?checked=${this.hasAttribute("checked")}
            ?disabled=${this.hasAttribute("disabled")}
            class="sr-only"
          />
          <div
            class=${cn(
              "h-6 w-6 p-2.5 outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400",
              "flex items-center justify-center",
              this.hasAttribute("disabled") && "cursor-not-allowed bg-gray-200",
              this.getAttribute("class")
            )}
          >
            ${this.hasAttribute("checked") ? html` <iconify-icon icon="raphael:check" class="text-blue-500" height="16"></iconify-icon> ` : null}
          </div>
          ${this.hasAttribute("label") ? html`<div class="cursor-default text-sm font-medium text-gray-900">${this.getAttribute("label")}</div>` : null}
        </div>
      `
    );

    this.querySelector(".relative").addEventListener(
      "click",
      () => {
        if (this.hasAttribute("disabled")) return;
        this.toggleAttribute("checked");
      },
      { once: true }
    );
  }
}

customElements.define("fo-checkbox", FormCheckbox);
