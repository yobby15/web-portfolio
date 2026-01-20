import TextAbout from "./TextAbout";
import ImageAbout from "./ImageAbout";

function About() {
  return (
    <div className="flex px-8 py-10 about-theme min-h-screen">
      <div className="flex-1 flex flex-col justify-center px-10">
        <TextAbout/>
      </div>
      <div className="flex-1 flex justify-center">
        <ImageAbout/>
      </div>
    </div>
  );
}

export default About;