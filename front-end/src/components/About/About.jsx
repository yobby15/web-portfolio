import MyWifeImg from '../../assets/images/MyWife.jpg';

function Hero() {
  return (
    <div className="flex px-8 py-10 about-theme min-h-screen">
      <div className="flex-1 flex justify-center flex-col gap-5 text-justify">


        <p className="font-semibold text-xl">
          I'm Yobby Novialdi, an Informatics Engineering student at the State University of Surabaya (UNESA).
        </p>

        <p>
          My focus lies at the intersection of Web and Mobile Development and Artificial Intelligence. I am passionate about not just building functional apps, but creating intelligent systems where software meets data. My goal is to develop seamless cross-platform applications that leverage Machine Learning to solve real-world problems and provide smarter user experiences.
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={MyWifeImg} alt="MyWife" className="w-125 h-125 object-cover object-top rounded-lg justify-center"/>
      </div>
    </div>
  );
}

export default Hero;