import { cn } from "@/libraries/utilities";
import { html, render } from "uhtml";

/**
 * @element ui-table
 *
 * @attr {string} [class]
 */
class UITable extends HTMLElement {
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
        <div class="relative overflow-hidden">
          <div
            class=${cn(
              "w-full overflow-auto rounded-lg bg-white shadow-sm border border-gray-300",
              "[&_table]:w-full [&_table]:caption-bottom",
              "[&_tr]:border-b [&_tr]:transition-colors [&_tr:hover]:bg-gray-100 [&_tr:last-child]:border-0",
              "[&_tfoot]:border-t",
              "[&_th]:h-12 [&_th]:align-middle [&_th]:whitespace-nowrap [&_th]:font-semibold [&_th]:text-white [&_th]:bg-blue-700 [&_th]:text-sm [&_th]:px-4 [&_th]:py-2 [&_th]:capitalize",
              "[&_td]:whitespace-nowrap [&_td]:align-middle [&_td]:text-sm [&_td]:px-4 [&_td]:py-2",
              this.getAttribute("class")
            )}
          >
            ${this.content}
          </div>
        </div>
      `
    );
  }
}

customElements.define("ui-table", UITable);
