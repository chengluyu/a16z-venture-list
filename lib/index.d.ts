declare module "a16z-venture-list" {
  export type Company = {
    /**
     * Type of the company.
     * This is obtained from the `company-type--*` class name of the `<div />`.
     */
    type: string | null;
    /**
     * Venture stage.
     * This is obtained from the `company-stage--*` class name of the `<div />`.
     */
    stage: string | null;
    /**
     * URL of the link in https://a16z.com/portfolio/.
     * This is obtained from the `href` attribute of the `<a />`.
     */
    url: string | null;
    /**
     * Host name extracted from `url`.
     * This is obtained from `new URL(url).hostname`.
     */
    hostname: string | null;
    /**
     * Sub-category of the company. For most companies, this is `""`.
     * This is obtained from the `data-subcategory` attribute.
     */
    subcategory: string | null;
    /**
     * Logo url image of the company.
     * This is obtained from the `src` attribute of the `<img />`.
     */
    logo: string | null;
    /**
     * Logo url image of the company in different dimensions.
     * This is obtained from the `srcSet` attribute of the `<img />`.
     */
    logos: { url: string; width: number }[];
  };
  /**
   * Finds `Company`s in `newCompanies` that not in `oldCompanies`
   * This is a pure function.
   * @param oldCompanies an array containing old companies
   * @param newCompanies an array containing new companies
   */
  export function compare(
    oldCompanies: Company[],
    newCompanies: Company[]
  ): Company[];
  /**
   * Download the latest companies in from [Andreessen Horowitz](https://a16z.com).
   */
  export function fetch(): Promise<Company[]>;
  /**
   * Load the saved data from a file.
   * The default source is `./latest.json`.
   * It returns `null` if the file does not exist.
   * @param filePath the file to be loaded, default to "./latest.json"
   */
  export function load(filePath?: string): Promise<Company[] | null>;
  /**
   * Save data to a file. The default destination is `./latest.json`.
   * @param data data to be saved
   * @param filePath the file to be saved to, default to "./latest.json"
   */
  export function save(data: Object, filePath?: string): Promise<void>;
}
