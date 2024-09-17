import { cn } from "@/libraries/utilities";
import { html, render } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import tippy from "tippy.js/headless";

/**
 * @element ui-popover
 *
 * @attr {string} name
 * @attr {"click" | "mouseenter"} [trigger]
 * @attr {"auto" | "auto-start" | "auto-end" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "right" | "right-start" | "right-end" | "left" | "left-start" | "left-end"} [placement]
 * @attr {string} [class]
 */
class UIPopover extends HTMLElement {
  constructor() {
    super();
    this.content = this.innerHTML;
    this.innerHTML = "";
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    const className = this.getAttribute("class");

    // @ts-ignore
    tippy(document.querySelector(`[data-popover-trigger=${this.getAttribute("name")}]`), {
      content: this.content,
      trigger: this.getAttribute("trigger") || "click",
      animation: true,
      interactive: true,
      placement: this.getAttribute("placement") || "auto",
      appendTo: document.body,
      render(instance) {
        const popper = document.createElement("div");
        const template = html`
          <div class=${cn("popover-content duration-150 border bg-white p-6 shadow-lg rounded-lg", className)}>
            <div>${unsafeHTML(instance.props.content.toString())}</div>
          </div>
        `;
        render(template, popper);
        return { popper };
      },
      onShow(instance) {
        const content = instance.popper.querySelector(".popover-content");
        content.classList.remove("animate-out", "fade-out-0", "zoom-out-95");
        content.classList.add("animate-in", "fade-in-0", "zoom-in-95");
      },
      onHide(instance) {
        const content = instance.popper.querySelector(".popover-content");
        content.classList.remove("animate-in", "fade-in-0", "zoom-in-95");
        content.classList.add("animate-out", "fade-out-0", "zoom-out-95");

        content.addEventListener(
          "animationend",
          () => {
            instance.unmount();
          },
          { once: true }
        );
      },
      plugins: [this.hideOnEsc],
    });
  }

  hideOnEsc = {
    name: "hideOnEsc",
    defaultValue: true,
    fn({ hide }) {
      function onKeyDown(event) {
        if (event.keyCode === 27) {
          hide();
        }
      }

      return {
        onShow() {
          document.addEventListener("keydown", onKeyDown);
        },
        onHide() {
          document.removeEventListener("keydown", onKeyDown);
        },
      };
    },
  };
}

customElements.define("ui-popover", UIPopover);
