import MyWifeImg from '../assets/images/MyWife.jpg';

function Hero() {
  return (
    <div className="flex ">
      <div>
        <h1>
          Bonjour
        </h1>

        <p>
          Hi, I'm Yobby Novialdi, an Informatics Engineering student at the State University of Surabaya (UNESA).
        </p>

        <p>
          My focus lies at the intersection of Web and Mobile Development and Artificial Intelligence. I am passionate about not just building functional apps, but creating intelligent systems where software meets data. My goal is to develop seamless cross-platform applications that leverage Machine Learning to solve real-world problems and provide smarter user experiences.
        </p>
      </div>
      <div>
        <img src={MyWifeImg} alt="" />
      </div>
    </div>
  )
}

export default Hero;