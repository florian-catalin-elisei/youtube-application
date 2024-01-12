import axios from "axios";

const youtubeApi = "https://www.googleapis.com/youtube/v3";
const youtubeApiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

const instance = axios.create({
  baseURL: youtubeApi,
  timeout: 5000,
  params: {
    part: "snippet",
    key: youtubeApiKey,
  },
});

const getVideos = async (searchValue) => {
  try {
    const response = await instance.get("/search", {
      params: {
        q: searchValue,
      },
    });

    const { data } = response;

    return data;
  } catch (error) {
    throw new Error(`Unable to fetch videos: ${error.message}`);
  }
};

export default getVideos;
