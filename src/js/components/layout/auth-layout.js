import { cn } from "../../libraries/tailwind.js";
import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@4.5.11/+esm";

/**
 * @element auth-layout
 */
class AuthLayout extends HTMLElement {
  constructor() {
    super();
    this.content = Array.from(this.childNodes);
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    const path = new URL(window.location.href).pathname;

    render(
      this,
      html`
        <div class="grid xl:grid-cols-[fit-content(20ch),minmax(min(50vw,30ch),1fr)] h-screen">
          <aside
            id="sidebar"
            class=${cn(
              "peer z-30 bg-white flex flex-col gap-1 overflow-y-auto border-r border-gray-200 shadow-lg text-sm overflow-x-clip duration-200 ease-in-out fixed h-screen xl:!w-[316px] xl:relative",
              "w-0 data-[open]:w-[316px]"
            )}
          >
            <div class="p-4">Logo</div>
            <nav class="p-4 grow flex flex-col gap-2">
              <a
                href="dashboard/"
                class=${cn(
                  "group flex items-center gap-2 px-2 py-2  rounded hover:bg-ulbiBlue duration-200",
                  path.includes("/dashboard/") && "active bg-ulbiBlue"
                )}
              >
                <iconify-icon
                  class="text-gray-600 group-hover:text-ulbiOrange group-[.active]:text-ulbiOrange duration-200"
                  icon="material-symbols:dashboard"
                  width="24"
                  noobserver
                ></iconify-icon>
                <span class="text-gray-600 font-semibold group-hover:text-white group-[.active]:text-white duration-200">Dashboard</span>
              </a>
              <a
                href="component/"
                class=${cn(
                  "group flex items-center gap-2 px-2 py-2  rounded hover:bg-ulbiBlue duration-200",
                  path.includes("/component/") && "active bg-ulbiBlue"
                )}
              >
                <iconify-icon
                  class="text-gray-600 group-hover:text-ulbiOrange group-[.active]:text-ulbiOrange duration-200"
                  icon="material-symbols:dashboard"
                  width="24"
                  noobserver
                ></iconify-icon>
                <span class="text-gray-600 font-semibold group-hover:text-white group-[.active]:text-white duration-200">Component</span>
              </a>
              <a
                href="form/"
                class=${cn("group flex items-center gap-2 px-2 py-2  rounded hover:bg-ulbiBlue duration-200", path.includes("/form/") && "active bg-ulbiBlue")}
              >
                <iconify-icon
                  class="text-gray-600 group-hover:text-ulbiOrange group-[.active]:text-ulbiOrange duration-200"
                  icon="material-symbols:dashboard"
                  width="24"
                  noobserver
                ></iconify-icon>
                <span class="text-gray-600 font-semibold group-hover:text-white group-[.active]:text-white duration-200">Form</span>
              </a>
              <a
                href="table/"
                class=${cn("group flex items-center gap-2 px-2 py-2  rounded hover:bg-ulbiBlue duration-200", path.includes("/table/") && "active bg-ulbiBlue")}
              >
                <iconify-icon
                  class="text-gray-600 group-hover:text-ulbiOrange group-[.active]:text-ulbiOrange duration-200"
                  icon="material-symbols:dashboard"
                  width="24"
                  noobserver
                ></iconify-icon>
                <span class="text-gray-600 font-semibold group-hover:text-white group-[.active]:text-white duration-200">Table</span>
              </a>
              <a
                href="user/"
                class=${cn("group flex items-center gap-2 px-2 py-2  rounded hover:bg-ulbiBlue duration-200", path.includes("/user/") && "active bg-ulbiBlue")}
              >
                <iconify-icon
                  class="text-gray-600 group-hover:text-ulbiOrange group-[.active]:text-ulbiOrange duration-200"
                  icon="material-symbols:dashboard"
                  width="24"
                  noobserver
                ></iconify-icon>
                <span class="text-gray-600 font-semibold group-hover:text-white group-[.active]:text-white duration-200">User</span>
              </a>
            </nav>
            <div class="p-4">
              <a href="logout/">Logout</a>
            </div>
          </aside>
          <div
            id="sidebarOverlay"
            class="fixed duration-200 inset-0 transition-backdrop h-screen w-0 z-20 peer-data-[open]:block backdrop-blur-none peer-data-[open]:w-screen peer-data-[open]:backdrop-blur-sm xl:!hidden"
          ></div>
          <div class="overflow-y-auto">
            <header class="sticky z-10 top-0 h-24 bg-ulbiBlue text-white border-b-8 border-ulbiOrange flex items-center px-4">
              <button id="sidebarMenu" class="xl:hidden text-white hover:text-white/60 duration-100">
                <iconify-icon icon="material-symbols:menu" width="24" noobserver></iconify-icon>
              </button>
            </header>
            <main class="mx-4 my-6">${this.content}</main>
          </div>
        </div>
      `
    );

    const sidebar = document.getElementById("sidebar");
    const sidebarMenu = document.getElementById("sidebarMenu");
    const sidebarOverlay = document.getElementById("sidebarOverlay");

    sidebarMenu.addEventListener("click", () => {
      const isSidebarOpen = sidebar.hasAttribute("data-open");
      if (isSidebarOpen) sidebar.removeAttribute("data-open");
      else sidebar.setAttribute("data-open", "");
    });

    sidebarOverlay.addEventListener("click", () => {
      const isSidebarOpen = sidebar.hasAttribute("data-open");
      if (isSidebarOpen) sidebar.removeAttribute("data-open");
    });

    document.addEventListener("keyup", (event) => {
      if (event.key === "Escape") {
        const isSidebarOpen = sidebar.hasAttribute("data-open");
        if (isSidebarOpen) sidebar.removeAttribute("data-open");
      }
    });
  }
}

customElements.define("auth-layout", AuthLayout);
