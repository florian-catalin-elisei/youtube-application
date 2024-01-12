import "./MainVideo.css";

const MainVideo = (props) => {
  const { video } = props;
  const src = `https://www.youtube.com/embed/${video?.id.videoId}`;

  if (!video) {
    return null;
  }

  return (
    <div className="MainVideo">
      <iframe src={src} title="Video Player" />
      <h3>{`${video.snippet.title} - ${video.snippet.channelTitle}`}</h3>
      <p>{`${video.snippet.description}`}</p>
    </div>
  );
};

export default MainVideo;
