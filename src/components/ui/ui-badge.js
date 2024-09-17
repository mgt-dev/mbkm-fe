import { html, render } from "uhtml";
import { cn } from "@/libraries/utilities";

/**
 * @element ui-badge
 * @attr {boolean} [dot] - Menampilkan badge dengan dot jika diatur.
 * @attr {string} [content] - Isi teks dalam badge.
 * @attr {string} [class] - Kelas tambahan untuk kustomisasi.
 */
class UIBadge extends HTMLElement {
  constructor() {
    super();
    this.content = Array.from(this.childNodes);
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    const hasDot = this.hasAttribute("dot");

    render(
      this,
      html`
        <div class=${cn("rounded-xs px-2 py-1 text-xs font-medium flex items-center gap-2 shrink-0 w-fit", this.getAttribute("class"))}>
          ${hasDot ? html`<span class="w-2 h-2 rounded-full bg-current"></span>` : ""} ${this.content}
        </div>
      `
    );
  }
}

customElements.define("ui-badge", UIBadge);
