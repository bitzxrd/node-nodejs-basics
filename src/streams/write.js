import { createWriteStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const filePath = join(__dirname, "files", "fileToWrite.txt");

  const writebleStream = createWriteStream(filePath, "utf-8");

  console.log("write text");

  process.stdin.pipe(writebleStream);

  writebleStream.on("finish", () => {
    console.log("Data successfully saved");
  });

  writebleStream.on("error", (err) => {
    console.error("File write error: ", err);
  })
};

await write();
