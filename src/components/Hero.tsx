import ActionLink from "./ActionLink";

function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute grid w-full h-full grid-cols-2">
        <img
          src="/pictures/Wohnzimmer/Sofa_Fenster.jpg"
          alt=""
          className="w-full h-full"
        />
        <img
          src="/pictures/Draußen/Schneeweg.jpg"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-center h-full gap-4 p-12 m-auto text-center align-middle md:w-2/5 opacity-90 bg-base-200">
        <h1 className="text-5xl md:text-[5vw] font-extrabold font-accent">
          Welcome
        </h1>
        <h2 className="text-xl md:text-[2vw] lg:text-xl">
          to our modern holiday apartment “Wolke7” located in Bad Harzburg.
        </h2>
        <ActionLink href={"/booking"} className="mx-auto w-max">
          Get in touch
        </ActionLink>
      </div>
    </section>
  );
}

export default Hero;
