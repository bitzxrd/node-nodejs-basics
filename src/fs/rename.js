import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const wrongFilename = join(__dirname, "files", "wrongFilename.txt");
  const properFilename = join(__dirname, "files", "properFilename.md");

  try {
    await fs.access(wrongFilename);

    try {
      await fs.access(properFilename);
      console.error("FS operation failed");
    } catch {
      await fs.rename(wrongFilename, properFilename);
    }
  } catch {
    console.error("FS operation failed");
  }
};

await rename();
