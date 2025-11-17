const Video = ({
  src,
  autoPlay = true,
  poster = "",
  loop = true,
  muted = true,
}) => {
  return (
    <video
      src={src}
      autoPlay={autoPlay ? true : false}
      loop={loop ? true : false}
      muted={muted ? true : false}
      className="w-full aspect-video"
      aria-hidden="true"
    />
  );
};

export default Video;
