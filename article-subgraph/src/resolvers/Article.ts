import { Resolvers } from "../__generated__/resolvers-types";

export const Article: Resolvers = {
  Article: {
    __resolveReference(parent, _context) {
      return { id: parent.id, name: "Article" };
    },
    author: (parent, _args, _context) => {
      return { __typename: "Author", id: parent.authorId };
    },
  },
};
