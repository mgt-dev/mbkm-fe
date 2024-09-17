import { html, render } from "lit-html";
import { cn } from "@/libraries/utilities";

/**
 * @element ui-badge
 * @attr {string} [class] - Kelas tambahan untuk kustomisasi.
 * @attr {string} [content] - Isi teks dalam badge.
 * @attr {boolean} [dot] - Menampilkan badge dengan dot jika diatur.
 */
class UIBadge extends HTMLElement {
  constructor() {
    super();
    this.component = null;
    this.content = this.getAttribute("content") || "";
    this.innerHTML = "";
  }

  static get observedAttributes() {
    return ["class", "content", "dot"];
  }

  connectedCallback() {
    this.renderTemplate();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    this.renderTemplate();
  }

  renderTemplate() {
    const hasDot = this.hasAttribute("dot");

    render(
      html`
        <div class=${cn("rounded-xs px-2 py-1 text-xs font-medium flex items-center gap-2 shrink-0 w-fit", this.getAttribute("class"))}>
          ${hasDot ? html`<span class="w-2 h-2 rounded-full bg-current"></span>` : ""} ${this.content}
        </div>
      `,
      this
    );
  }
}

customElements.define("ui-badge", UIBadge);
