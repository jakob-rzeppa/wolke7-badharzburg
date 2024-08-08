import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Article from "./sections/Article";
import ArticleMultipleImages from "./sections/ArticleMultipleImages";
import ArticleOneImage from "./sections/ArticleOneImage";
import CallToAction from "./sections/CallToAction";
import InformationWithImages from "./sections/InformationWithImages";
import Map from "./sections/Map";
import Pricing from "./sections/Pricing";

function App() {
  return (
    <>
      <Header />
      <main>
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
          background="bg-base-200"
        />
        <CallToAction
          text="Have the best vacation of your life!"
          link={{ href: "/booking", name: "See our prices" }}
        />
        <InformationWithImages
          information={[
            {
              title: "Living Room",
              description:
                "The living room is a place for relaxation and socializing. It's the perfect place to unwind after a long day.",
              image: "pictures/Wohnzimmer/Zimmer.jpg",
            },
            {
              title: "Living Room",
              description:
                "The living room is a place for relaxation and socializing. It's the perfect place to unwind after a long day.",
              image: "pictures/Wohnzimmer/Zimmer.jpg",
            },
            {
              title: "Living Room",
              description:
                "The living room is a place for relaxation and socializing. It's the perfect place to unwind after a long day.",
              image: "pictures/Wohnzimmer/Zimmer.jpg",
            },
          ]}
        />
        <ArticleOneImage
          title="General equipment"
          content="The apartment has a modern heater, free WiFi, and is non-smoking."
          img={{ src: "/pictures/Tuer/Tuer.jpg", alt: "door", side: "left" }}
        />
        <ArticleMultipleImages
          title="Common areas"
          content="The property offers free private parking and is fully fenced. It also includes a terrace with garden furniture and a table grill."
          imgs={[
            {
              src: "/pictures/Terrasse/Terrassentuer.jpg",
              alt: "terrace",
            },
            {
              src: "/pictures/Tuer/Tuer.jpg",
              alt: "door",
            },
            {
              src: "/pictures/Flur/Flur.jpg",
              alt: "hallway",
            },
          ]}
          background="bg-base-200"
        />
        <ArticleOneImage
          title="Livingroom and bedroom"
          content="A double bed, a flat-screen TV, a sofa bed, and a radio are included in the apartment."
          img={{
            src: "/pictures/Wohnzimmer/Fernseher.jpg",
            alt: "tv",
            side: "right",
          }}
        />
        <ArticleOneImage
          title="Kitchen"
          content="The kitchen includes a dishwasher, a fridge/freezer, an oven with a ceramic hob, and a water heater. It also features a coffee machine and a Nespresso coffee machine."
          img={{
            src: "/pictures/Küche/Küchenzeile.jpg",
            alt: "kitchen",
            side: "left",
          }}
          background="bg-base-200"
        />
        <ArticleMultipleImages
          title="Bathroom"
          content="The Bathroom contains a shower, hairdryer and large mirror."
          imgs={[
            {
              src: "/pictures/Bad/Dusche.jpg",
              alt: "shower",
            },
            {
              src: "/pictures/Bad/Zahnbuerste.jpg",
              alt: "shelf",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
