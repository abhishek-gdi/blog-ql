import { IArticleApi } from "../data-sources/article.api";
export interface DataSourceContext {
  auth?: string;
  articleApi: IArticleApi;
}
