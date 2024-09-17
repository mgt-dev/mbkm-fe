import { html } from "uhtml";
import "@/components/ui/ui-link";

export const MetaTitle = "Page Not Found";
export const MetaDescription = "Description of this page";

export default async function Page() {
  return html`
    <h1>${MetaTitle}</h1>
    <ui-link href="/" type="spa">Home</ui-link>
  `;
}
