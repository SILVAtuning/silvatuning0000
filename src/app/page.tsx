import getImageSrcPath from "@/utils/getImageSrcPath";

export default function Home() {
  console.log("env: ", process.env)
  return (
    <>
      <div className="home-bg">
        <video
          autoPlay
          loop
          muted
        >
          <source
            src={getImageSrcPath('/video/silva_tuning_opening.mp4')}
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}
