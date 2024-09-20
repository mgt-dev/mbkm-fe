import { $ } from "bun";
import { readFileSync, writeFileSync } from "fs";

async function modifyBaseHref(isProduction) {
  try {
    const result = await $`find . -name "*.html"`;
    const output = result.stdout.toString().trim();

    const filesArray = output.split("\n").filter(Boolean);

    filesArray.forEach((file) => {
      try {
        const content = readFileSync(file, "utf-8");
        const newBaseHref = isProduction ? '<base href="https://bakazero.github.io/try-github-pages/" />' : '<base href="/" />';
        const updatedContent = content.replace(/<base href=".*?" \/>/, newBaseHref);
        writeFileSync(file, updatedContent, "utf-8");
      } catch (err) {
        console.error(`Error processing file ${file}:`, err);
      }
    });
  } catch (err) {
    console.error("Error modifying base href:", err);
  }
}

async function updateBaseUrl(isProduction) {
  try {
    const settingsPath = "./src/js/customs/settings.js";
    const content = readFileSync(settingsPath, "utf-8");
    const newBaseUrl = isProduction ? "https://bakazero.github.io/try-github-pages/" : "/";
    const updatedContent = content.replace(/export const baseUrl = ".*?";/, `export const baseUrl = "${newBaseUrl}";`);
    writeFileSync(settingsPath, updatedContent, "utf-8");
  } catch (err) {
    console.error("Error updating baseUrl:", err);
  }
}

async function runTailwindCommands(isProduction) {
  try {
    if (isProduction) {
      //   await $`tailwindcss -i ./src/css/raw/choices.css -o ./src/css/minify/choices.min.css --minify`;
      //   await $`tailwindcss -i ./src/css/raw/filepond.css -o ./src/css/minify/filepond.min.css --minify`;
      //   await $`tailwindcss -i ./src/css/raw/flatpickr.css -o ./src/css/minify/flatpickr.min.css --minify`;
      //   await $`tailwindcss -i ./src/css/raw/micromodal.css -o ./src/css/minify/micromodal.min.css --minify`;
      //   await $`tailwindcss -i ./src/css/raw/notify.css -o ./src/css/minify/notify.min.css --minify`;
      await $`tailwindcss -i ./src/css/raw/main.css -o ./src/css/minify/main.min.css --minify`;
    } else {
      await $`tailwindcss -i ./src/css/raw/main.css -o ./src/css/minify/main.min.css --watch`;
    }
  } catch (err) {
    console.error("Error running Tailwind CSS commands:", err);
  }
}

const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
};

const mode = process.argv[2];

if (mode === "dev") {
  await modifyBaseHref(false);
  await updateBaseUrl(false);
  console.log(`${colors.green}Running in development (watch) mode, ${colors.yellow}happy coding!${colors.reset}`);
  await runTailwindCommands(false);
} else if (mode === "prod") {
  await modifyBaseHref(true);
  await updateBaseUrl(true);
  await runTailwindCommands(true);
  console.log(`${colors.blue}Done changing to production mode, ${colors.yellow}let's push it!${colors.reset}`);
} else {
  console.log("Usage: bun run switch-mode.js [dev|prod]");
}
