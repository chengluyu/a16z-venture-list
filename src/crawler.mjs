import mkdirp from "mkdirp";
import { load, save } from "./data.mjs";
import { dataFolderPath } from "./paths.mjs";

async function main() {
  const oldData = await load();
  const urlCreationTimeMap = new Map(
    oldData?.companies?.map((x) => [x.url, x.updatedAt]) ?? []
  );
  const time = new Date().toISOString();
  const companies = await fetch();
  companies.forEach((company) => {
    company.createdAt = urlCreationTimeMap.get(url) ?? time;
  });
  await save({ time, companies });
}

mkdirp.sync(dataFolderPath);
main();
