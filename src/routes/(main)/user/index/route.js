import { html } from "uhtml";
import "iconify-icon";
import "@/components/ui/ui-link";

export const MetaTitle = "User";

export default async function Page() {
  return html`
    <h1 class="text-lg font-bold">${MetaTitle}</h1>
    <div class="flex gap-1 items-center">
      <iconify-icon icon="mdi:account" height="16"></iconify-icon>
      <ui-link href="/user/detail" type="spa" class="detail">User Detail</ui-link>
    </div>
  `;
}

export const Script = async () => {
  for (const linkDetail of document.getElementsByClassName("detail")) {
    if (linkDetail instanceof HTMLAnchorElement) {
      const id = Math.floor(Math.random() * 100000).toString();
      linkDetail.setAttribute("data-id", id);
      linkDetail.href = `${linkDetail.href}?id=${id}`;
    }
  }

  console.log(`ini script page ${MetaTitle}`);
};
