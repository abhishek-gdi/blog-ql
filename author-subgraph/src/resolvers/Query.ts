import { RestClient } from "../utils";
import { Resolvers, Author } from "../__generated__/resolvers-types";
import { DataSourceContext } from "../types/DataSourceContext";

export const Query: Resolvers = {
  Query: {
    async getAuthor(
      _parent,
      { id },
      context: DataSourceContext
    ): Promise<Author | null> {
      return context.authorApi.getAuthorById(id);
    },
    async listAuthors(
      _: unknown,
      __: unknown,
      context: DataSourceContext
    ): Promise<Author[]> {
      return context.authorApi.listAuthors();
    },
  },
};
