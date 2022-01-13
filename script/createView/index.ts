import fs from "fs-extra";
import path from "path";

import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const args = process.argv.splice(2);
const [pageName, routeTitle, isKeepAlive] = args;
const capitalize = pageName[0].toUpperCase() + pageName.slice(1);
const camelCased = pageName[0].toLowerCase() + pageName.slice(1);

const VueTargetPath = path.resolve(__dirname, "../../src/views", `./${camelCased}/index.vue`);
const RouterTargetPath = path.resolve(__dirname, "../../src/router/routes", `./${capitalize}.ts`);

await fs.ensureFile(VueTargetPath);
const ViewTemplate = await fs.readFile(path.resolve(__dirname, "./template/view.vue"), "utf-8");
fs.writeFile(VueTargetPath, ViewTemplate.replace(/pageName/g, capitalize));

await fs.ensureFile(RouterTargetPath);
const RouteTemplate = await fs.readFile(path.resolve(__dirname, "./template/router.ts"), "utf-8");
fs.writeFile(
    RouterTargetPath,
    RouteTemplate.replace(/pageName/g, capitalize)
        .replace(/PageName/g, camelCased)
        .replace(/routeTitle/g, routeTitle ?? "")
        .replace(/isKeepAlive/g, isKeepAlive ?? "false")
);
