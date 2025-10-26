import { createReadStream, createWriteStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createGunzip } from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const inputFilePath = join(__dirname, "files", "archive.gz");
  const outputFilePath = join(__dirname, "files", "fileToCompress.txt");

  const readStream = createReadStream(inputFilePath);
  const writeStream = createWriteStream(outputFilePath);
  const gunzip = createGunzip();

  readStream.pipe(gunzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("file successfully decompressed");
  });

  readStream.on("error", (err) =>
    console.error(`error reading file ${err.message}`)
  );
  writeStream.on("error", (err) =>
    console.error(`error write file ${err.message}`)
  );
};

await decompress();
