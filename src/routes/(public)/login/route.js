import { html } from "uhtml";
import { redirect } from "@/libraries/client.router";
import { setAuth } from "@/libraries/server.function";
import { $auth } from "@/stores/auth";
import { timeout } from "@/libraries/utilities";
import nProgress from "nprogress";
import "@/components/ui/ui-button";
import "@/components/form/fo-input";
import "@/components/form/fo-label";
import "@/components/form/fo-error";

export const MetaTitle = "Login";
export const MetaDescription = "Description of this page";

export default async function Page() {
  return html`
    <div>
      <h1 class="text-lg font-bold">${MetaTitle}</h1>
      <form id="login-form" class="my-4 space-y-4 max-w-xl">
        <div>
          <fo-label for="username" label="Username"></fo-label>
          <fo-input name="username" value="waw"></fo-input>
          <fo-error name="username"></fo-error>
        </div>
        <div>
          <fo-label for="password" label="Password"></fo-label>
          <fo-input name="password" type="password" value="waw"></fo-input>
          <fo-error name="password"></fo-error>
        </div>
        <div>
          <ui-button type="submit">Login</ui-button>
        </div>
      </form>
    </div>
  `;
}

export const Script = async () => {
  const form = document.getElementById("login-form");
  if (form instanceof HTMLFormElement) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);

      if (!formValidation(form, formData)) return;

      nProgress.start();
      form.querySelectorAll("ui-button").forEach((element) => element.setAttribute("disabled", ""));

      await timeout(300);
      const token = "mhwahahahaha";
      await setAuth(token);
      $auth.set({ token });

      redirect("/dashboard");
    });
  }
};

/**
 * @param  {HTMLFormElement} form
 * @param  {FormData} data
 */
const formValidation = (form, data) => {
  let error = false;

  const username = data.get("username");
  const password = data.get("password");

  if (!username) {
    form.querySelectorAll("[name='username']").forEach((element) => element.setAttribute("error", "This field is required"));
    error = true;
  }

  if (!password) {
    form.querySelectorAll("[name='password']").forEach((element) => element.setAttribute("error", "This field is required"));
    error = true;
  }

  return !error;
};
