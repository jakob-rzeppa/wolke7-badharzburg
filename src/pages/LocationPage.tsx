import Map from "../sections/Map";

function LocationPage() {
  return (
    <Map
      title="Location"
      content="Our charming holiday apartment “Wolke7” welcomes you in Bad Harzburg, 1.7 kilometres from the center of the spa town of Bad Harzburg."
      address="Am Breitenberg 41/3, 38667 Bad Harzburg"
      latitude={51.87879012975221}
      longitude={10.538890025373371}
    />
  );
}

export default LocationPage;
