import { html } from "lit-html";
import "@/components/ui/ui-button";
import "@/components/ui/ui-dialog";
import "@/components/ui/ui-popover";

export const MetaTitle = "Component";

export default async function Page() {
  return html`
    <h1 class="text-lg font-bold">${MetaTitle}</h1>

    <div class="mt-4">
      <ui-button data-popover-trigger="popover-test">Popover</ui-button>
      <ui-popover name="popover-test" trigger="click">
        <div>Ini Content Popover</div>
      </ui-popover>
    </div>

    <div class="mt-4">
      <ui-button data-dialog-trigger="dialog-test">Dialog</ui-button>
      <ui-dialog name="dialog-test">
        <div>Ini Content Modal</div>
      </ui-dialog>
    </div>
  `;
}

export const Script = async () => {
  console.log(`ini script page ${MetaTitle}`);
};
