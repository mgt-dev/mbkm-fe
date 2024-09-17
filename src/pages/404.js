import { html } from "lit-html";

export const MetaTitle = "Page Not Found";

export default async function Page() {
  return html`
    <h1>${MetaTitle}</h1>
    <a href="/" class="spa text-blue-600 hover:text-blue-400">Home</a>
  `;
}
