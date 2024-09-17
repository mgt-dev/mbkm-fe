import { cn } from "@/libraries/utilities";
import { html, render } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import MicroModal from "micromodal";

/**
 * @element ui-dialog
 *
 * @attr {string} name
 * @attr {string} [class]
 */
class UIDialog extends HTMLElement {
  constructor() {
    super();
    this.content = this.innerHTML;
    this.innerHTML = "";
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    const id = this.getAttribute("name") || Date.now().toString();

    render(
      html`
        <style>
          .ui-dialog {
            display: none;
          }
          .ui-dialog.is-open {
            display: block;
          }
        </style>
        <div class="group ui-dialog" id=${id} aria-hidden="true">
          <div
            class=${cn(
              "duration-300 fixed inset-0 bg-white/80 backdrop-blur-sm",
              "group-aria-[hidden=false]:animate-in group-aria-[hidden=false]:fade-in-0",
              "group-aria-hidden:animate-out group-aria-hidden:fade-out-0"
            )}
            tabindex="-1"
            data-dialog-close
          ></div>
          <div
            class=${cn(
              "duration-300 fixed left-[50%] top-[50%] w-full h-full max-w-[95dvw] max-h-[90dvh] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-md border bg-white p-6 shadow-lg",
              "group-aria-[hidden=false]:animate-in group-aria-[hidden=false]:fade-in-0 group-aria-[hidden=false]:zoom-in-95 group-aria-[hidden=false]:slide-in-from-left-1/2 group-aria-[hidden=false]:slide-in-from-top-[48%]",
              "group-aria-hidden:animate-out group-aria-hidden:fade-out-0 group-aria-hidden:zoom-out-95 group-aria-hidden:slide-out-to-left-1/2 group-aria-hidden:slide-out-to-top-[48%]",
              this.getAttribute("class")
            )}
            role="dialog"
            aria-modal="true"
          >
            ${unsafeHTML(this.content)}
          </div>
        </div>
      `,
      document.body
    );

    MicroModal.init({
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
      disableScroll: true,
      openTrigger: "data-dialog-trigger",
      closeTrigger: "data-dialog-close",
    });
  }
}

customElements.define("ui-dialog", UIDialog);
