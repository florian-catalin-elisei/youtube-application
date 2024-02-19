import "./MainVideo.css";

export const MainVideo = ({ video }) => {
  if (!video) return null;

  const { title, channelTitle, description } = video.snippet;
  const src = `https://www.youtube.com/embed/${video?.id.videoId}`;

  return (
    <div className="MainVideo">
      <iframe className="MainVideo-iframe" src={src} title="Video Player" />
      <h3>{`${title} - ${channelTitle}`}</h3>
      <p>{description}</p>
    </div>
  );
};
