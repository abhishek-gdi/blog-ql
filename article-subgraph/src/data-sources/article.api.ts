import { Article } from "../__generated__/resolvers-types";
import { RestClient } from "../utils";

export type IArticleApi = {
  getArticleById: (id: string) => Promise<Article | null>;
  listArticles: () => Promise<Article[]>;
  createArticle: (data: Partial<Article>) => Promise<Article>;
  updateArticle: (data: Article) => Promise<Article | null>;
  deleteArticle: (data: { id: string }) => Promise<boolean>;
};

export const articleApi: IArticleApi = {
  getArticleById: async (id: string) => {
    const result: Article | null = await RestClient<Article>(`/article/${id}`);

    return result;
  },
  listArticles: async () => {
    const res = await RestClient<Article[]>(`/article`);
    return res;
  },
  createArticle: async (data: Partial<Article>) => {
    const result: Article = await RestClient<Article>(
      `/article`,
      { title: data.title, content: data.content, authorId: data.authorId },
      "POST"
    );
    return result;
  },
  updateArticle: async (data: Partial<Article>) => {
    const Article = await RestClient<Article>(
      "/article/" + data.id,
      data,
      "PUT"
    );
    return Article;
  },
  deleteArticle: async (data: { id: string }) => {
    const Article = await RestClient<Article>(
      "/article/" + data.id,
      {},
      "DELETE"
    );
    return true;
  },
};
