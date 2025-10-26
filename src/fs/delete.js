import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const fileToRemove = join(__dirname, "files", "fileToRemove.txt");

  try {
    await fs.access(fileToRemove);
    await fs.unlink(fileToRemove);
  } catch {
    console.error("FS operation failed");
  }
};

await remove();
