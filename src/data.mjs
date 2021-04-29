import { promises as fs } from "fs";
import { dataFilePath } from "./paths.mjs";

export async function load() {
  try {
    return JSON.parse(await fs.readFile(dataFilePath, { encoding: "utf-8" }));
  } catch {
    return null;
  }
}

export async function save(data) {
  await fs.writeFile(dataFilePath, JSON.stringify(data));
}
