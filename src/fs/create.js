import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const create = async () => {
  const filePath = join(__dirname, "files", "fresh.tsxh")

  try {
    await fs.access(filePath);
    console.error("FS operation failed");
  } catch {
    try {
      await fs.writeFile(filePath, "I am fresh and young", "utf8");
    } catch {
      console.error("FS operation failed");
    }
  }
};

await create();
