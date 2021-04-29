# a16z Venture List

## Types

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

## Functions

- `compare(oldCompanies: Company[], newCompanies: Company[]): Company[]` exported in _compare.mjs_: a pure function that finds `Company`s in `newCompanies` that not in `oldCompanies`
- `fetch(): Promise<Company[]>` exported in _fetch.mjs_: download the latest companies in from [Andreessen Horowitz][a16z], it will also cache data at `data/latest.json`.
- `load(filePath?: string): Promise<Company[] | null>` exported in _latest.mjs_: load the saved data. The default source is `./latest.json`. It returns `null` if the file does not exist.
- `save(data: Object, filePath?: string): Promise<void>` exported in _latest.mjs_: save data. The default destination is `./latest.json`.

[a16z]: https://a16z.com
