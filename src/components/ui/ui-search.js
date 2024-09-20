import { html, render } from "uhtml";

class UISearch extends HTMLElement {
  constructor() {
    super();
    this.placeholder = this.getAttribute("placeholder") || "Enter keyword";
    this.buttonText = this.getAttribute("buttonText") || "Search";
  }

  connectedCallback() {
    this.renderTemplate();
    this.attachEventListeners();
  }

  renderTemplate() {
    render(
      this,
      html`
        <form id="search-form" class="flex space-x-2">
          <input type="text" name="keyword" class="border rounded-md px-2 py-1 w-full" placeholder="${this.placeholder}" />
          <button type="submit" class="bg-orange-500 text-white px-4 py-2 rounded-md">${this.buttonText}</button>
        </form>
      `
    );
  }

  attachEventListeners() {
    const form = this.querySelector("#search-form");
    if (form instanceof HTMLFormElement) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const keyword = formData.get("keyword");
        if (keyword) {
          this.dispatchEvent(
            new CustomEvent("search", {
              detail: { keyword },
              bubbles: true,
              composed: true,
            })
          );
        }
      });
    }
  }
}

customElements.define("ui-search", UISearch);
