import Hero from "../components/Hero";
import Article from "../sections/Article";
import Map from "../sections/Map";

function Homepage() {
  return (
    <>
      <Hero />
      <Article
        title="Rest and relax"
        content="We warmly welcome you to our “Wolke7” in Bad Harzburg. We wish you a restful and relaxing holiday in the Harz Mountains. "
        link={{ href: "/booking", name: "Check avaliability" }}
      />
      <Map />
    </>
  );
}

export default Homepage;
