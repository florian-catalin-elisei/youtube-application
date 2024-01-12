import "./VideoItem.css";

const VideoItem = (props) => {
  const { video, selectVideo } = props;
  const handleClick = () => selectVideo(video);

  return (
    <div className="VideoItem">
      <img src={video.snippet.thumbnails.medium.url} alt="Thumbnail" onClick={handleClick} />
      <p>{video.snippet.title}</p>
    </div>
  );
};

export default VideoItem;
