import Hero from "../components/Hero";
import Article from "../sections/Article";
import CallToAction from "../sections/CallToAction";
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
      <Map
        title="Location"
        content=" Our charming holiday apartment “Wolke7” welcomes you in Bad Harzburg, 1.7 kilometres from the center of the spa town of Bad Harzburg."
        address="Am Breitenberg 41/3, 38667 Bad Harzburg"
        latitude={51.87879012975221}
        longitude={10.538890025373371}
      />
      <CallToAction
        text="Have the best vacation of your life!"
        link={{ href: "/pricing", name: "See our prices" }}
      />
    </>
  );
}

export default Homepage;
