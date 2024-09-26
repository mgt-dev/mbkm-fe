import { toast } from "../src/js/libraries/notify.js";
import { formValidation } from "./validation.js";

const form = document.getElementById("form-form");
if (form instanceof HTMLFormElement) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    if (!formValidation(form, formData)) return;

    await fetch("/api/form", {
      method: "POST",
      body: formData,
    });

    toast.success("Success submit form");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll("[data-tabs-target]");
  const tabContents = document.querySelectorAll('[role="tabpanel"]');

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // @ts-ignore
      const target = document.querySelector(tab.dataset.tabsTarget);

      // Remove active classes from all tabs and contents
      tabs.forEach((t) => {
        t.classList.remove("text-blue-800", "border-b-2", "border-blue-800");
        t.classList.add("text-gray-500"); // Inactive state
        t.setAttribute("aria-selected", "false");
      });
      tabContents.forEach((content) => content.classList.add("hidden"));

      // Add active class to clicked tab and show the corresponding content
      tab.classList.remove("text-gray-500");
      tab.classList.add("text-blue-800", "border-b-2", "border-blue-800"); // Active state
      tab.setAttribute("aria-selected", "true");
      target.classList.remove("hidden");
    });
  });
});
