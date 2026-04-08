import { Typewriter } from 'react-simple-typewriter';

function HelloHero() {
  const words = ['Hello', 'Bonjour', 'Halo', 'こんにちは', '안녕하세요', '你好', 'مرحبا', 'Привет'];

  return (
    <h1 className="font-black text-6xl tracking-wider min-h-[1.2em]">
      <Typewriter
        words={words}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </h1>
  )
}

export default HelloHero;