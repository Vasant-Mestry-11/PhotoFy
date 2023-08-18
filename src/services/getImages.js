import axios from "axios";
import { getURL } from "./common/attachTokenId";
import { BASE_URL } from "../constants/URL";

export const getImages = async (page = 1, query = "") => {
  try {
    const result = await axios.get(
      getURL(`${BASE_URL}?page=${page}&query=${query}`)
    );

    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};
