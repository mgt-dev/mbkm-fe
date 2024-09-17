import { redirect } from "@/libraries/client.router";
import { removeAuth } from "@/libraries/server.function";
import { $auth } from "@/stores/auth";
import { html } from "uhtml";

export const MetaTitle = "Logout";

export default async function Page() {
  $auth.set({ token: undefined });
  await removeAuth();
  return html``;
}

export const Script = async () => {
  return redirect("/login");
};
