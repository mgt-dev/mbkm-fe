import fileRoutes from "vinxi/routes";
import { toast, simpleHash } from "./utilities";
import { html, render } from "lit-html";
import nprogress from "nprogress";
import { pathToRegexp } from "path-to-regexp";

export const handleRoute = async () => {
  const path = window.location.pathname;
  const routeComponent = findRoute(path);

  try {
    if (!routeComponent) {
      const p404Component = routes.find((route) => route.uri === "/404");
      const p404Module = await dynamicLoad(p404Component.component);
      await loadModule(p404Component, p404Module);
      return;
    }

    const layoutComponent = findLayout(routeComponent.path);

    if (layoutComponent) {
      const layoutModule = await dynamicLoad(layoutComponent.component);
      await loadModule(layoutComponent, layoutModule);
    } else {
      render(html``, document.getElementById("app-page"));
    }

    const routeModule = await dynamicLoad(routeComponent.component);
    await loadModule(routeComponent, routeModule);
  } catch (error) {
    if (error === "redirect") return;
    toast.error(error.message);
    console.error(error);
    nprogress.done();
  }
};

/**
 * @param {Event} event
 */
export const route = (event) => {
  event.preventDefault();
  const target = /** @type {HTMLAnchorElement} */ (event.target);
  window.history.pushState({}, "", target.href);
  handleRoute();
};

/**
 * @param {string} path
 */
export const redirect = (path) => {
  window.history.pushState({}, "", path);
  handleRoute();
};

const routes = fileRoutes.map((route) => ({
  path: route.path,
  type: route.path.includes("/layout") ? "layout" : "route",
  hash: simpleHash(route.path),
  /**
   * @type {{ src: string; import: () => Promise<any>; require?: () => any; build?: () => Promise<any> }}
   */
  component: route.$component,
  uri: route.path
    .replace(/\(.*?\)\//g, "")
    .replace(/index\//g, "")
    .replace(/route$/, "")
    .replace(/\/+$/, ""),
}));

const findLayout = (path) => {
  return routes.filter((route) => route.uri.includes("/layout")).find((layout) => path.startsWith(layout.path.replace("/layout", "")));
};

const findRoute = (path) => {
  return routes.filter((route) => !route.uri.includes("/layout")).find((route) => (route.uri || "/") === path);
};

/**
 * @param {HTMLElement} element
 */
const addLinkListener = (element) => {
  for (const link of element.getElementsByClassName("spa")) {
    link.removeEventListener("click", route);
    link.addEventListener("click", route);
  }
};

const loadModule = async (component, module) => {
  const appElement = document.getElementById("app");
  const pageElement = document.getElementById("app-page");

  if (component.type === "404") {
    const hash = appElement?.getAttribute("data-hash");
    if (component.hash === hash) return;
    document.title = (await module.MetaTitle) ?? "";
    if (module.default) {
      nprogress.start();
      render(await module.default(), appElement);
      addLinkListener(appElement);
      nprogress.done();
    }
    if (module.Script) await module.Script();
    appElement.setAttribute("data-hash", component.hash);
    return;
  }

  if (component.type === "layout") {
    const hash = appElement?.getAttribute("data-hash");
    if (component.hash === hash) return;
    if (module.default) {
      const template = await module.default();
      if (!template) throw "redirect";
      render(template, appElement);
      addLinkListener(appElement);
    }
    if (module.Script) await module.Script();
    appElement.setAttribute("data-hash", component.hash);
    return;
  }

  if (component.hash === appElement?.getAttribute("data-hash") || component.hash === pageElement?.getAttribute("data-hash")) return;

  document.title = (await module.MetaTitle) ?? "";
  if (module.default) {
    nprogress.start();
    if (pageElement) {
      render(await module.default(), pageElement);
      addLinkListener(pageElement);
      pageElement.setAttribute("data-hash", component.hash);
    } else {
      render(await module.default(), appElement);
      addLinkListener(appElement);
      appElement.setAttribute("data-hash", component.hash);
    }
    nprogress.done();
  }
  if (module.Script) await module.Script();
};

const dynamicLoad = async (component) => {
  let load;

  try {
    if (component.build) {
      load = await component.build();
    } else {
      const cleanedPath = component.src.replace("file:///", "").replace(/\\/g, "/");
      const relativePath = cleanedPath.match(/\/src\/.*/)[0];
      load = await import(/* @vite-ignore */ relativePath);
    }
  } catch (error) {
    load = await component.import();
  }

  return load;
};
