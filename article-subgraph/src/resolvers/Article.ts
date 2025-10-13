import { Resolvers } from "../__generated__/resolvers-types";
import { DataSourceContext } from "../types/DataSourceContext";

export const Article: Resolvers = {
  Article: {
    __resolveReference(parent, context: DataSourceContext) {
      return context.articleApi.getArticleById(parent.id, context.authToken);
    },
    author: (parent, _args, context: DataSourceContext) => {
      return { __typename: "Author", id: parent.authorId };
    },
  },
};
