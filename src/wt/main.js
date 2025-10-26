import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";
import os from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const numCores = os.cpus().length;
  const numbersToCalculate = Array.from({ length: numCores }, (_, i) => 10 + i);

  const results = [];

  const workerPromises = numbersToCalculate.map((num, index) => {
    return new Promise((resolve) => {
      const worker = new Worker(join(__dirname, "worker.js"));

      worker.on("message", (msg) => {
        results[index] = msg;
        resolve(msg);
        worker.terminate();
      });

      worker.on("error", () => {
        results[index] = { status: "error", data: null };
        resolve(results[index]);
        worker.terminate();
      });

      worker.postMessage(num);
    });
  });

  await Promise.all(workerPromises);

  console.log(results);
};

await performCalculations();
