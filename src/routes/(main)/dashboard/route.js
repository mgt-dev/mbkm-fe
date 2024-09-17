import { toast } from "@/libraries/utilities";
import { html } from "uhtml";

export const MetaTitle = "Dashboard";

export default async function Page() {
  return html`
    <div>
      <h1 class="text-lg font-bold">${MetaTitle}</h1>
    </div>
  `;
}

export const Script = async () => {
  toast.success(`ini script page ${MetaTitle}`);
  console.log(`ini script page ${MetaTitle}`);
};
