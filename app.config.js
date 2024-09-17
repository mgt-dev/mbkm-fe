import { serverFunctions } from "@vinxi/server-functions/plugin";
import { createApp, resolve } from "vinxi";
import { analyzeModule, BaseFileSystemRouter, cleanPath } from "vinxi/fs-router";
import tsconfigPaths from "vite-tsconfig-paths";

class FileRouter extends BaseFileSystemRouter {
  // ref: https://docs.solidjs.com/solid-router
  toPath(src) {
    const routePath = cleanPath(src, this.config)
      .slice(1)
      .replace(/\[([^\/]+)\]/g, (_, m) => {
        if (m.length > 3 && m.startsWith("...")) {
          return `*${m.slice(3)}`;
        }
        if (m.length > 2 && m.startsWith("[") && m.endsWith("]")) {
          return `:${m.slice(1, -1)}?`;
        }
        return `:${m}`;
      });

    return routePath?.length > 0 ? `/${routePath}` : "/";
  }

  toRoute(src) {
    let path = this.toPath(src);
    const [_, exports] = analyzeModule(src);
    const hasDefault = !!exports.find((e) => e.n === "default");
    if (hasDefault) {
      return {
        $component: {
          src,
          pick: ["default", "MetaTitle", "Script"],
        },
        path,
      };
    }
  }
}

export default createApp({
  server: {
    experimental: {
      asyncContext: true,
    },
  },
  routers: [
    {
      name: "public",
      type: "static",
      dir: "./public",
    },
    {
      name: "client",
      type: "spa",
      handler: "./index.html",
      plugins: () => [serverFunctions.client(), tsconfigPaths()],
      routes: (router, app) => {
        return new FileRouter(
          {
            dir: resolve.absolute("./src/pages", router.root ?? ""),
            extensions: ["js", "jsx", "ts", "tsx"],
          },
          router,
          app
        );
      },
    },
    serverFunctions.router(),
  ],
});
