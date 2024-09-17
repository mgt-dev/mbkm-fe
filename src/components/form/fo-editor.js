import EditorJS from "@editorjs/editorjs";
import NestedList from "@editorjs/nested-list";
import { html, render } from "uhtml";

/**
 * @element fo-editor
 *
 * @attr {string} [class]
 */
class FormEditor extends HTMLElement {
  constructor() {
    super();
    this.component = null;
    this.editor = null;
    this.save = null;
  }

  connectedCallback() {
    this.renderTemplate();
  }

  static get observedAttributes() {
    return ["data-editor-content"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.component || oldValue === newValue) return;
    this.editor.isReady.then(() => this.editor.render(JSON.parse(newValue)));
  }

  renderTemplate() {
    render(this, html`<div id="editorjs" class="bg-gray-50 min-h-[400px] border border-gray-300 text-gray-900 text-sm overflow-hidden rounded p-2.5"></div>`);

    this.component = this.querySelector("#editorjs");
    if (this.component instanceof HTMLElement) {
      this.editor = new EditorJS({
        holder: this.component,
        minHeight: 0,
        placeholder: "Let`s write an awesome story!",
        inlineToolbar: ["convertTo", "bold", "italic"],
        tools: {
          list: {
            // @ts-ignore
            class: NestedList,
            inlineToolbar: true,
            config: {
              defaultStyle: "unordered",
            },
          },
        },
      });
    }

    this.save = document.querySelector("[data-editor-save]");
    if (this.save instanceof HTMLElement) {
      this.save.addEventListener("click", () => {
        this.editor
          .save()
          .then((outputData) => {
            console.log(outputData);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  }
}

customElements.define("fo-editor", FormEditor);
