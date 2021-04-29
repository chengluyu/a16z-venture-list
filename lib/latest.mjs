import { promises as fs } from "fs";

const defaultPath = "./latest.json";

export async function load(filePath = defaultPath) {
  try {
    return JSON.parse(await fs.readFile(filePath, { encoding: "utf-8" }));
  } catch {
    return null;
  }
}

export async function save(data, filePath = defaultPath) {
  await fs.writeFile(filePath, JSON.stringify(data));
}
