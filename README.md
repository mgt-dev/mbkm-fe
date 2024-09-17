# MBKM FE

- [Vinxi](https://vinxi.vercel.app)
- [Tailwind](https://tailwindcss.com)
- [uhtml](https://github.com/WebReflection/uhtml)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)

### VS Code

##### Plugin

- Prettier - Code formatter
- Tailwind CSS Intellisense
- lit-plugin

##### Setting (JSON)

```json
"tailwindCSS.experimental.classRegex":
    [["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*?)[\"'`]"]]
```

## Development

Install dependencies:

```sh
npm install
```

Run project:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Check `.output` folder to see build result
Then run the app in production mode:

```sh
npm start
#or
node .output/server/index.mjs
```

Now you'll need to pick a host to deploy it to.
