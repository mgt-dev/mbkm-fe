import { cn } from "@/libraries/utilities";
import { html, render } from "uhtml";

/**
 * @element ui-link
 *
 * @attr {string} href
 * @attr {"spa" | "external"} [type]
 * @attr {"_blank"} [target]
 * @attr {string} [class]
 */
class UILink extends HTMLElement {
  constructor() {
    super();
    this.content = Array.from(this.childNodes);
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    render(
      this,
      html`
        <a
          class=${cn("text-blue-600 hover:text-blue-400", this.getAttribute("class"), this.getAttribute("type") === "spa" && "spa")}
          href=${this.getAttribute("href")}
          target=${this.getAttribute("target")}
        >
          ${this.content}
        </a>
      `
    );
  }
}

customElements.define("ui-link", UILink);
