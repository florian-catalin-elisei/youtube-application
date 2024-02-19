import "./VideoItem.css";

export const VideoItem = ({ video, selectVideo }) => {
  const { url } = video.snippet.thumbnails.medium;
  const { title } = video.snippet;
  const handleClick = () => selectVideo(video);

  return (
    <div className="VideoItem">
      <img className="VideoItem-thumbnail" src={url} alt="Thumbnail" onClick={handleClick} />
      <p className="VideoItem-title">{title}</p>
    </div>
  );
};
