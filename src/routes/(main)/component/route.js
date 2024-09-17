import { html } from "uhtml";
import "@/components/ui/ui-button";
import "@/components/ui/ui-dialog";
import "@/components/ui/ui-popover";
import "@/components/form/fo-editor";

export const MetaTitle = "Component";

export default async function Page() {
  return html`
    <h1 class="text-lg font-bold">${MetaTitle}</h1>

    <div class="mt-4 flex items-center gap-2">
      <div>
        <ui-button data-dialog-trigger="dialog-test">Dialog</ui-button>
        <ui-dialog name="dialog-test">
          <div>Ini Content Modal</div>
        </ui-dialog>
      </div>
      <div>
        <ui-button data-popover-trigger="popover-test">Popover</ui-button>
        <ui-popover name="popover-test" trigger="click" placement="bottom" class="mt-2">
          <div>Ini Content Popover</div>
        </ui-popover>
      </div>
    </div>

    <div class="mt-4 max-w-5xl">
      <h2 class="mb-1 font-bold">Editor</h2>
      <fo-editor></fo-editor>
      <div class="mt-2 flex justify-end">
        <ui-button data-editor-save>Save</ui-button>
      </div>
    </div>
  `;
}

export const Script = async () => {
  console.log(`ini script page ${MetaTitle}`);

  const editor = document.querySelector("fo-editor");
  if (editor instanceof HTMLElement) {
    editor.setAttribute("data-editor-content", JSON.stringify(dummyContent));
  }
};

const dummyContent = {
  blocks: [
    {
      id: "CgHLs_kHQS",
      type: "paragraph",
      data: {
        text: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
      },
    },
    {
      id: "pf6zJMHRB-",
      type: "paragraph",
      data: {
        text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
      },
    },
    {
      id: "am5YeX1Re9",
      type: "paragraph",
      data: {
        text: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
      },
    },
    {
      id: "mPvkVtmoff",
      type: "paragraph",
      data: {
        text: "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.",
      },
    },
  ],
};
