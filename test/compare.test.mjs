import { compare } from "../src/compare.mjs";
import { fetch } from "../src/fetch.mjs";

async function test() {
  const companies = await fetch();
  const tail = companies.slice(1);
  const difference = compare(tail, companies);
  console.log(difference.length === 1);
  console.log(difference[0] === companies[0]);
}

test().catch(console.log);
