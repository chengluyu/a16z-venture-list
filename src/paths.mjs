import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const dataFolderPath = path.resolve(__dirname, "..", "data");
export const dataFilePath = path.resolve(dataFolderPath, "data.json");
export const latestFilePath = path.resolve(dataFolderPath, "latest.json");
