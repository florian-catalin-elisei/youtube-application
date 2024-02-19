import { VideoItem } from "../VideoItem/VideoItem";
import Grid from "@mui/material/Unstable_Grid2";
import "./VideosList.css";

export const VideosList = ({ videos, selectVideo }) => {
  const videosList = videos.map((video, id) => (
    <VideoItem key={id} video={video} selectVideo={selectVideo} />
  ));

  return (
    <div className="VideosList">
      <Grid container spacing={2}>
        <Grid xs={12}>{videosList}</Grid>
      </Grid>
    </div>
  );
};
