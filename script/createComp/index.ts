import path from "path";
import fs from "fs-extra";

import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const args = process.argv.splice(2);
const [compName] = args;

const capitalize = compName[0].toUpperCase() + compName.slice(1);
const camelCased = compName[0].toLowerCase() + compName.slice(1);

const targetPath = path.resolve(__dirname, "../../src/components", `./${capitalize}`);
const vueTarget = path.join(targetPath, `./${capitalize}.vue`);
const indexTarget = path.join(targetPath, "./index.ts");

await fs.ensureFile(vueTarget);
const data = await fs.readFile(path.resolve(__dirname, "./template/comp.vue"), "utf-8");
fs.writeFile(vueTarget, data.replace(/compName/g, camelCased));

await fs.ensureFile(indexTarget);
await fs.writeFile(indexTarget, `export { default } from "./${capitalize}.vue";`);
