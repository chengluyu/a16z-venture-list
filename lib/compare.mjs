export function compare(oldCompanies, newCompanies) {
  const hostSet = new Set(oldCompanies.map((x) => x.hostname));
  return newCompanies.filter((x) => !hostSet.has(x.hostname));
}
