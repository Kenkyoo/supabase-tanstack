import { notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import axios from "redaxios";

export type PostType = {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  location: {
    name: string;
  };
  episode: string[];
};

// Personaje individual - NO tiene .results, devuelve el objeto directo
export const fetchPost = createServerFn({ method: "GET" })
  .inputValidator((d: string) => d)
  .handler(async ({ data: postId }) => {
    console.info(`Fetching post with id ${postId}...`); // ← Paréntesis normales
    const post = await axios
      .get<PostType>(`https://rickandmortyapi.com/api/character/${postId}`) // ← Paréntesis normales
      .then((r) => r.data)
      .catch((err) => {
        console.error(err);
        if (err.status === 404) {
          throw notFound();
        }
        throw err;
      });
    return post;
  });

// Lista de personajes - SÍ tiene .results
export const fetchPosts = createServerFn({ method: "GET" }).handler(
  async () => {
    console.info("Fetching posts...");
    await new Promise((r) => setTimeout(r, 1000));

    type RickMortyResponse = {
      results: Array<PostType>;
    };

    return axios
      .get<RickMortyResponse>("https://rickandmortyapi.com/api/character")
      .then((r) => r.data.results.slice(0, 19));
  },
);
