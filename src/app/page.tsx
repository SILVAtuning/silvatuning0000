export default function Home() {
  return (
    <>
      <div className="home-bg">
        <video
          autoPlay
          loop
          muted
        >
          <source
            src={`/video/silva_tuning_opening.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}
