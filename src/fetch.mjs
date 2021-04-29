import axios from "axios";
import { JSDOM } from "jsdom";
import mkdirp from "mkdirp";
import srcset from "srcset";
import { load, save } from "./data.mjs";
import { dataFolderPath } from "./paths.mjs";

const COMPANY_TYPE = "company-type--";
const COMPANY_STAGE = "company-stage--";

async function main() {
  const oldData = await load();
  const urlCreationTimeMap = new Map(
    oldData?.companies?.map((x) => [x.url, x.updatedAt]) ?? []
  );
  const response = await axios({
    method: "GET",
    url: "https://a16z.com/portfolio",
  });
  const dom = new JSDOM(response.data);
  const time = new Date().toISOString();
  const companies = [];
  for (const companyElement of dom.window.document.querySelectorAll(
    ".company"
  )) {
    const classes = [...companyElement.classList.values()];
    const type =
      classes
        .find((s) => s.startsWith(COMPANY_TYPE))
        ?.slice(COMPANY_TYPE.length) ?? null;
    const stage =
      classes
        .find((s) => s.startsWith(COMPANY_STAGE))
        ?.slice(COMPANY_STAGE.length) ?? null;
    const url = companyElement.querySelector("a")?.href ?? null;
    const subcategory = companyElement.dataset.subcategory ?? null;
    const logo = companyElement.querySelector("img")?.src ?? null;
    const logos = srcset.parse(companyElement.querySelector("img")?.srcset);
    const createdAt = urlCreationTimeMap.get(url) ?? time;
    companies.push({ type, stage, url, subcategory, logo, logos, createdAt });
  }
  await save({ time, companies });
}

mkdirp.sync(dataFolderPath);
main();
