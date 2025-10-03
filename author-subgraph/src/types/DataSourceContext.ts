import { IAuthorApi } from "../data-sources/author.api";

export interface DataSourceContext {
  authToken?: string;
  auth?: string;
  authorApi: IAuthorApi;
}
