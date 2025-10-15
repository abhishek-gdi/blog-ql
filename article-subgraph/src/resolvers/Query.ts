import { Resolvers, Article } from "../__generated__/resolvers-types";
import { DataSourceContext } from "../types/DataSourceContext";

export const Query: Resolvers = {
  Query: {
    async getArticle(
      _parent,
      { id },
      context: DataSourceContext
    ): Promise<Article | null> {
      return context.articleApi.getArticleById(id, context.authToken);
    },

    async listArticles(
      _: unknown,
      __: unknown,
      context: DataSourceContext
    ): Promise<Article[]> {
      return context.articleApi.listArticles(context.authToken);
    },

    async articles(_parent, { first = 10, after }, context: DataSourceContext) {
      const allArticles = await context.articleApi.listArticles(
        context.authToken
      );
      let startIndex = 0;
      if (after) {
        const index = allArticles.findIndex((article) => article.id === after);
        startIndex = index + 1;
      }
      const edges = allArticles
        .slice(startIndex, startIndex + first)
        .map((article) => ({
          cursor: article.id,
          node: article,
        }));
      const endCursor =
        edges.length > 0 ? edges[edges.length - 1].cursor : null;
      const hasNextPage = startIndex + first < allArticles.length;
      return {
        edges,
        pageInfo: {
          endCursor,
          hasNextPage,
        },
      };
    },
  },
};
