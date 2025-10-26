import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const fileToRead = join(__dirname, "files", "fileToRead.txt");

  try {
    await fs.access(fileToRead);

    try {
      const readFile = await fs.readFile(fileToRead, 'utf-8');
      console.log(readFile);
    } catch {
      console.error("FS operation failed");
    }
  } catch {
    console.error("FS operation failed");
  }
};

await read();
