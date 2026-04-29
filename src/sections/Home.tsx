import picOfMe from "../assets/images/me.png";

export function Home() {
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row font-montserrat gap-15 lg:gap-5 justify-center lg:justify-between items-center w-full sm:max-w-7xl mx-auto min-h-screen p-5"
    >
      <div className="max-w-[70%] lg:flex-1 order-2 lg:order-1 font-roboto bg-linear-65 from-purple-500 to-blue-500 shadow-md text-white rounded-md p-3 text-shadow-md">
        <span className="text-lg sm:text-xl font-bold">Hi There!</span>
        <br></br>
        <br></br>
        <p className="text-sm sm:text-md">
          I'm a Senior Computer Science student passionate about building clean,
          user-friendly applications and continuously growing as a developer.
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
    </section>
  );
}
