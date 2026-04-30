import picOfMe from "../assets/images/me.png";
import { Particles } from "../components";

export function Home() {
  return (
    <section id="home" className="w-full relative min-h-screen">
      <div className="absolute inset-0 z-0 w-screen">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={["#000000"]}
          moveParticlesOnHover={false}
          particleHoverFactor={1}
          alphaParticles={false}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>
      <div className="relative min-h-screen z-5 flex flex-col lg:flex-row font-montserrat gap-15 lg:gap-5 justify-center lg:justify-between items-center sm:max-w-7xl mx-auto p-5">
        <div className="w-full sm:max-w-[70%] lg:flex-1 order-2 lg:order-1 font-roboto bg-linear-65 from-purple-500 to-blue-500 shadow-md text-white rounded-md p-3 text-shadow-md">
          <span className="text-lg sm:text-xl font-bold">Hi There!</span>
          <br></br>
          <br></br>
          <p className="text-sm sm:text-md">
            I'm a senior majoring in Computer Science at the University of
            Delaware. I am a passionate developer with a strong interest in web
            development and software engineering, and I enjoy building
            applications that are both functional and user-friendly. With a
            solid foundation in modern web technologies, I am always seeking
            opportunities to expand my skills and grow as a developer. Outside
            of computer science, I am a passionate soccer fan and avid gamer.
            These interests have inspired several of the personal projects I
            have developed, allowing me to combine creativity with technical
            problem-solving.
          </p>
        </div>
        <div className="flex order-1 lg:order-2 lg:flex-2 gap-5 items-center justify-center">
          <div
            className="rounded-full shadow-xl h-25 w-25 bg-gray-200 md:h-45 md:w-45 bg-cover"
            style={{ backgroundImage: `url(${picOfMe})` }}
          />
          <div>
            <p className="font-semibold text-2xl sm:text-4xl md:text-5xl">
              Brandon Nauta
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-700">
              Software Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
