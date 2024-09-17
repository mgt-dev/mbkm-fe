import { redirect } from "@/libraries/client.router";
import { $auth } from "@/stores/auth";
import { html } from "uhtml";
import "@/components/ui/ui-link";

export default async function Layout() {
  const auth = $auth.get();
  if (!auth?.token) {
    return redirect("/");
  }

  return html`
    <div class="space-y-4 m-4">
      <header>
        <h1>Header</h1>
        <nav>
          <ui-link href="/dashboard" type="spa">Dashboard</ui-link>
          <ui-link href="/component" type="spa">Component</ui-link>
          <ui-link href="/form" type="spa">Form</ui-link>
          <ui-link href="/table" type="spa">Table</ui-link>
          <ui-link href="/user" type="spa">User</ui-link>
          <ui-link href="/logout" type="spa">Logout</ui-link>
        </nav>
      </header>
      <div id="app-page"></div>
      <!-- <footer>Footer</footer> -->
    </div>
  `;
}
