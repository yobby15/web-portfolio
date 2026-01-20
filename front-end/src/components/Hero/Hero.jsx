import HelloHero from "./HelloHero";
import NameHero from "./NameHero";
import DescHero from "./DescHero";

function Hero() {
  return (
    <div className="flex flex-col hero-theme justify-center items-center gap-5 text-center min-h-screen">
      <HelloHero/>

      <NameHero/>

      <DescHero/>
    </div>
  )
}

export default Hero;