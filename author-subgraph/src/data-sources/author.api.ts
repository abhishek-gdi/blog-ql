import { Author } from "../__generated__/resolvers-types";
import { RestClient } from "../utils";

export type IAuthorApi = {
  getAuthorById: (id: string) => Promise<Author | null>;
  listAuthors: () => Promise<Author[]>;
  createAuthor: (data: { name: string }) => Promise<Author>;
  updateAuthor: (data: Author) => Promise<Author | null>;
  deleteAuthor: (data: { id: string }) => Promise<boolean>;
};

export const authorApi: IAuthorApi = {
  getAuthorById: async (id: string) => {
    const result = await RestClient<Author>(`/author/${id}`);

    return result;
  },
  listAuthors: async () => {
    const res = (await RestClient<Author[]>(`/author`, null, "GET")) || [];
    return res;
  },
  createAuthor: async (data: { name: string }) => {
    const author: Author = await RestClient<Author>(
      `/author`,
      { name: data.name },
      "POST"
    );
    return author;
  },
  updateAuthor: async (data: Author) => {
    const author = await RestClient<Author>(
      "/auhor/" + data.id,
      { name: data.name },
      "PUT"
    );
    return author;
  },
  deleteAuthor: async (data: { id: string }) => {
    const author = await RestClient<Author>("/author/" + data.id, {}, "DELETE");
    return true;
  },
};
