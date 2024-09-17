import { html } from "lit-html";
import "@/components/ui/ui-button";
import "@/components/form/fo-input";
import "@/components/form/fo-select";
import "@/components/form/fo-label";
import "@/components/form/fo-error";
import { toast } from "@/libraries/utilities";

export const MetaTitle = "Form";

export default async function Page() {
  return html`
    <h1 class="text-lg font-bold">${MetaTitle}</h1>

    <form id="form-form" class="my-4 grid grid-cols-2 gap-x-6 gap-y-3 max-w-5xl">
      <div>
        <fo-label for="textInput" label="Text Input"></fo-label>
        <fo-input name="textInput" placeholder="Text..."></fo-input>
        <fo-error name="textInput"></fo-error>
      </div>
      <div>
        <fo-label for="password" label="Password Input"></fo-label>
        <fo-input name="password" type="password"></fo-input>
        <fo-error name="password"></fo-error>
      </div>
      <div>
        <fo-label for="numberInput" label="Number Input"></fo-label>
        <fo-input name="numberInput" type="number" min="20" max="100" placeholder="20 ... 100" value="20"></fo-input>
        <fo-error name="numberInput"></fo-error>
      </div>
      <div>
        <fo-label for="select" label="Select"></fo-label>
        <fo-select name="select" placeholder="Choose one...">
          <option value="_clear">Clear...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </fo-select>
        <fo-error name="select"></fo-error>
      </div>
      <div class="col-span-2">
        <ui-button type="submit">Submit</ui-button>
      </div>
    </form>
  `;
}

export const Script = async () => {
  const form = document.getElementById("form-form");
  if (form instanceof HTMLFormElement) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);

      if (!formValidation(form, formData)) return;

      toast.success("Success");
    });
  }
};

/**
 * @param  {HTMLFormElement} form
 * @param  {FormData} data
 */
const formValidation = (form, data) => {
  let error = false;

  const json = Object.fromEntries(data.entries());
  console.log(json);

  if (!data.get("textInput")) {
    form.querySelectorAll("[name='textInput']").forEach((element) => element.setAttribute("error", "This field is required"));
    error = true;
  }

  if (!data.get("password")) {
    form.querySelectorAll("[name='password']").forEach((element) => element.setAttribute("error", "This field is required"));
    error = true;
  }

  if (!data.get("numberInput")) {
    form.querySelectorAll("[name='numberInput']").forEach((element) => element.setAttribute("error", "This field is required"));
    error = true;
  }

  if (!data.get("select") || data.get("select") === "_clear") {
    form.querySelectorAll("[name='select']").forEach((element) => element.setAttribute("error", "This field is required"));
    error = true;
  }

  return !error;
};
