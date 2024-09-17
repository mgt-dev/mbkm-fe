import { redirect } from "@/libraries/client.router";
import { removeAuth } from "@/libraries/server.function";
import { $auth } from "@/stores/auth";

export const MetaTitle = "Logout";

export default async function Page() {
  $auth.set({ token: undefined });
  await removeAuth();
  return redirect("/login");
}
