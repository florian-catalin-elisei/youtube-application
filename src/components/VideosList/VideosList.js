import VideoItem from "../VideoItem/VideoItem";
import Grid from "@mui/material/Unstable_Grid2";
import "./VideosList.css";

const VideosList = (props) => {
  const { videos, selectVideo } = props;

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

export default VideosList;
