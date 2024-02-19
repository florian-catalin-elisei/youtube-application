import axios from "axios";

const youtubeApi = "https://www.googleapis.com/youtube/v3";
const youtubeApiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

const instance = axios.create({
  baseURL: youtubeApi,
  params: {
    part: "snippet",
    key: youtubeApiKey,
  },
});

export const getVideos = async (searchValue) => {
  try {
    const endpoint = "/search";
    const params = { q: searchValue };
    const { data } = await instance.get(endpoint, { params });

    return data;
  } catch (error) {
    throw new Error(`Failed to get videos: ${error.message}`);
  }
};
