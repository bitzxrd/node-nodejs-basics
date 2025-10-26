import { createReadStream, createWriteStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const inputFilePath = join(__dirname, "files", "fileToCompress.txt");
  const outputFilePath = join(__dirname, "files", "archive.gz");

  const readStream = createReadStream(inputFilePath);
  const writeStream = createWriteStream(outputFilePath);
  const gzip = createGzip();

  readStream.pipe(gzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("file successfully compressed");
  })

  readStream.on("error", (err) => console.error(`error reading file ${err.message}`));
  writeStream.on("error", (err) => console.error(`error write file ${err.message}`));

};

await compress();
