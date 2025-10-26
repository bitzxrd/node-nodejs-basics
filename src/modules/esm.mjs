import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { release, version } from "node:os";
import { createServer as createServerHttp } from "node:http";

import "./files/c.cjs";

import aFile from "./files/a.json" with { type: "json" };
import bFile from "./files/b.json" with { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

export const unknownObject = random > 0.5 ? aFile : bFile;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});
