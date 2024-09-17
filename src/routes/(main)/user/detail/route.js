import { html } from "uhtml";

export const MetaTitle = "User Detail";

export default async function Page() {
  const id = new URLSearchParams(window.location.search).get("id");

  return html`
    <div>
      <h1 class="text-lg font-bold">${MetaTitle} ${id}</h1>
    </div>
  `;
}

export const Script = async () => {
  console.log(`ini script page ${MetaTitle}`);
};
