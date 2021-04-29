const { promises: fs } = require("fs");

const defaultPath = "./latest.json";

module.exports.load = async function load(filePath = defaultPath) {
  try {
    return JSON.parse(await fs.readFile(filePath, { encoding: "utf-8" }));
  } catch {
    return null;
  }
};

module.exports.save = async function save(data, filePath = defaultPath) {
  await fs.writeFile(filePath, JSON.stringify(data));
};
