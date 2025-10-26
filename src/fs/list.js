import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const filesFolder = join(__dirname, "files");

  try {
    await fs.access(filesFolder);

    try {
      const filesNames = await fs.readdir(filesFolder);
      console.log(filesNames);
    } catch {
      console.error("FS operation failed");
    }
  } catch {
    console.error("FS operation failed");
  }
};

await list();
