import * as latest from "../src/latest.mjs";
import { fetch } from "../src/fetch.mjs";
import { latestFilePath } from "../src/paths.mjs";
import { promises as fs } from "fs";

async function test() {
  await fs.rm(latestFilePath, { force: true });
  console.log((await latest.load()) === null);
  const companies = await fetch();
  console.log(Array.isArray(companies));
  await latest.save(companies);
  console.log(Array.isArray(await latest.load()));
}

test().catch(console.log);
