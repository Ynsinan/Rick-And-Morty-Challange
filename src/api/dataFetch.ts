import axios from "axios";
import { CharacterFethAxiosType } from "global";

const baseUrl = "https://rickandmortyapi.com/api";

export const CharactersGET = async (page: number) => {
  const { data } = await axios.get<CharacterFethAxiosType>(
    `${baseUrl}/character/?page=${page}`
  );
  return data;
};
