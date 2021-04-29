# a16z Venture List

## Usage

```javascript
import { fetch } from "a16z-venture-list";

async function myGreatWork() {
  const companies = await fetch();
  console.log(companies);
}
```

## References

This package exports a type `Company` and 4 functions (`compare`, `fetch`, `load`, and `save`).

### Types

```typescript
export type Company = {
  type: string | null;
  stage: string | null;
  url: string | null;
  hostname: string | null;
  subcategory: string | null;
  logo: string | null;
  logos: { url: string; width: number }[];
};
```

### Functions

- `compare(oldCompanies: Company[], newCompanies: Company[]): Company[]`: a pure function that finds `Company`s in `newCompanies` that not in `oldCompanies`
- `fetch(): Promise<Company[]>`: download the latest companies in from [Andreessen Horowitz][a16z].
- `load(filePath?: string): Promise<Company[] | null>`: load the saved data. The default source is `./latest.json`. It returns `null` if the file does not exist.
- `save(data: Object, filePath?: string): Promise<void>`: save data. The default destination is `./latest.json`.

[a16z]: https://a16z.com
