import { removeAuth } from "../libraries/cookies.js";
import { baseUrl } from "./settings.js";

document.querySelector("ui-link[href='logout/']")?.addEventListener("click", async (event) => {
  event.preventDefault();
  await removeAuth();
  window.location.assign(`${baseUrl}login`);
});
