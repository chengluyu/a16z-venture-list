import axios from "axios";
import { JSDOM } from "jsdom";
import srcset from "srcset";
import { URL } from "url";

const COMPANY_TYPE = "company-type--";
const COMPANY_STAGE = "company-stage--";

export async function fetch() {
  const response = await axios({
    method: "GET",
    url: "https://a16z.com/portfolio",
  });
  const dom = new JSDOM(response.data);

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
    const hostname = typeof url === "string" ? new URL(url).hostname : null;
    const subcategory = companyElement.dataset.subcategory ?? null;
    const logo = companyElement.querySelector("img")?.src ?? null;
    const logos = srcset.parse(companyElement.querySelector("img")?.srcset);

    companies.push({
      type,
      stage,
      url,
      hostname,
      subcategory,
      logo,
      logos,
    });
  }
  return companies;
}
