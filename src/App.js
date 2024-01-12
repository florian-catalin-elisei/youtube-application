import { useState, useEffect } from "react";
import { SearchBar, MainVideo, VideosList } from "./components";
import Grid from "@mui/material/Unstable_Grid2";
import getVideos from "./api";
import "./App.css";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(null);

  const fetchVideos = (searchValue) => {
    getVideos(searchValue).then((data) => {
      setVideos(data.items);
      setVideo(data.items[0]);
    });
  };

  const selectVideo = (video) => setVideo(video);

  useEffect(() => {
    fetchVideos("South Korea");
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

export default App;
