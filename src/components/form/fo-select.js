import { html, render } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import Choices from "choices.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

/**
 * @element fo-select
 *
 * @attr {string} [name]
 * @attr {boolean} [error]
 * @attr {boolean} [searchable]
 * @attr {boolean} [disabled]
 * @attr {string} [placeholder]
 * @attr {string} [class]
 */
class FormSelect extends HTMLElement {
  constructor() {
    super();
    this.content = this.innerHTML;
    this.innerHTML = "";
    this.component = null;
    this.choices = null;
  }

  connectedCallback() {
    this.renderTemplate();
    this.component = this.querySelector("select");
    this.component.addEventListener("change", this.handleValueChanged);
  }

  disconnectedCallback() {
    this.component.removeEventListener("change", this.handleValueChanged);
  }

  static get observedAttributes() {
    return ["error", "disabled"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.component || oldValue === newValue) return;
    if (name === "error") this.handleError();
    if (name === "disabled") this.handleDisabled();
  }

  handleValueChanged() {
    this.parentElement.parentElement.parentElement.removeAttribute("error");
    document.querySelector(`fo-error[name="${this.getAttribute("name")}"]`)?.removeAttribute("error");
    if (this.hasAttribute("error")) this.parentElement.classList.add("error");
    else this.parentElement.classList.remove("error");
  }

  handleError() {
    const choiceInner = this.querySelector(".choices__inner");
    if (this.hasAttribute("error")) choiceInner.classList.add("error");
    else {
      choiceInner.classList.remove("error");
      this.component?.removeAttribute("error");
    }
  }

  handleDisabled() {
    if (this.hasAttribute("disabled")) this.choices.disable();
    else this.choices.enable();
  }

  renderTemplate() {
    render(
      html`
        <select
          id=${ifDefined(this.getAttribute("name"))}
          name=${ifDefined(this.getAttribute("name"))}
          data-placeholder=${this.getAttribute("placeholder") ?? ""}
        >
          ${unsafeHTML(this.content)}
        </select>
      `,
      this
    );

    const inputElement = this.querySelector("select");
    const choices = new Choices(inputElement, {
      searchEnabled: this.hasAttribute("searchable"),
      itemSelectText: "",
    });

    this.choices = choices;
    this.handleError();
    this.handleDisabled();

    inputElement.addEventListener("choice", function (event) {
      // @ts-ignore
      if (event.detail.value === "_clear") choices.removeActiveItems();
    });
  }
}

customElements.define("fo-select", FormSelect);
