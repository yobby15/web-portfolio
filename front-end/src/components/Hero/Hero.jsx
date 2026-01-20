import HelloHero from "./HelloHero";
import NameHero from "./NameHero";
import DescHero from "./DescHero";

function Hero() {
  return (
    <div className="flex flex-col hero-theme">
      <HelloHero/>

      <NameHero/>

      <DescHero/>
    </div>
  )
}

export default Hero;