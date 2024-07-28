import Article from "../sections/Article";

function Information() {
  return (
    <div>
      <Article
        title="General equipment"
        content="The apartment has a modern heater, free WiFi, and is non-smoking."
        img={{ src: "/pictures/Tuer/Tuer.jpg", alt: "door", side: "left" }}
        className="bg-base-200"
      />
      <Article
        title="Livingroom and bedroom"
        content="A double bed, a flat-screen TV, a sofa bed, and a radio are included in the apartment."
        img={{
          src: "/pictures/Wohnzimmer/Fernseher.jpg",
          alt: "tv",
          side: "right",
        }}
      />
      <Article
        title="Kitchen"
        content="The kitchen includes a dishwasher, a fridge/freezer, an oven with a ceramic hob, and a water heater. It also features a coffee machine and a Nespresso coffee machine."
        img={{
          src: "/pictures/Küche/Küchenzeile.jpg",
          alt: "kitchen",
          side: "left",
        }}
        className="bg-base-200"
      />
      <Article
        title="Bathroom"
        content="The Bathroom contains a shower, hairdryer and large mirror."
        img={{
          src: "/pictures/Bad/Dusche.jpg",
          alt: "shower",
          side: "right",
        }}
      />
    </div>
  );
}

export default Information;
