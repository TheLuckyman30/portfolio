import picOfMe from "../assets/images/me.png";

export function Home() {
  return (
    <section
      id="home"
      className="flex font-montserrat gap-5 items-center justify-center min-h-screen"
    >
      <div
        className="rounded-full shadow-xl h-25 w-25 bg-gray-200 md:h-55 md:w-55 bg-cover"
        style={{ backgroundImage: `url(${picOfMe})` }}
      />
      <div>
        <p className="font-semibold text-2xl sm:text-4xl md:text-6xl">
          Brandon Nauta
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl text-blue-700">
          Software Engineer
        </p>
      </div>
    </section>
  );
}
