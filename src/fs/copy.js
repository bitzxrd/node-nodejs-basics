import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const srcDir = join(__dirname, "files");
  const copyDir = join(__dirname, "files_copy");

  try {
    await fs.access(srcDir);

    try {
      await fs.access(copyDir);
      console.error("FS operation failed");
    } catch {
      await fs.cp(srcDir, copyDir, { recursive: true })
    }
  } catch {
    console.error("FS operation failed");
  }
};

await copy();
