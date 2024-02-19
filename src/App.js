import { useState, useEffect } from "react";
import { SearchBar, MainVideo, VideosList } from "./components";
import { getVideos } from "./api/getVideos";
import Grid from "@mui/material/Unstable_Grid2";
import "./App.css";

export const App = () => {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState();

  const fetchVideos = async (searchValue) => {
    const { items } = await getVideos(searchValue);
    setVideos(items);
    setVideo(items[0]);
  };

  const selectVideo = (video) => setVideo(video);

  useEffect(() => {
    fetchVideos("Seoul");
  }, []);

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid xs={12}>
          <SearchBar submit={fetchVideos} />
        </Grid>

        <Grid md={8} sm={12}>
          <MainVideo video={video} />
        </Grid>

        <Grid md={4} sm={12}>
          <VideosList videos={videos} selectVideo={selectVideo} />
        </Grid>
      </Grid>
    </div>
  );
};
