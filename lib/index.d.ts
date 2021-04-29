declare module "a16z-venture-list" {
  export type Company = {
    type: string | null;
    stage: string | null;
    url: string | null;
    hostname: string | null;
    subcategory: string | null;
    logo: string | null;
    logos: { url: string; width: number }[];
  };
  export function compare(
    oldCompanies: Company[],
    newCompanies: Company[]
  ): Company[];
  export function fetch(): Promise<Company[]>;
  export function load(filePath?: string): Promise<Company[] | null>;
  export function save(data: Object, filePath?: string): Promise<void>;
}
