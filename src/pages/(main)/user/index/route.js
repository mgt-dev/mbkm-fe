import { html } from "lit-html";
import "iconify-icon";

export const MetaTitle = "User";

export default async function Page() {
  return html`
    <h1 class="text-lg font-bold">${MetaTitle}</h1>
    <div class="flex gap-1 items-center">
      <iconify-icon icon="mdi:account" height="16"></iconify-icon>
      <a href="/user/detail" class="spa detail text-blue-600 hover:text-blue-400">User Detail</a>
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
