import classNames from "classnames";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface Props extends React.AllHTMLAttributes<HTMLDivElement> {}

function Map({ className, ...props }: Props) {
  return (
    <section
      className={classNames(className, "w-screen bg-base-200 text-center p-8")}
      {...props}
    >
      <h1 className="text-3xl font-accent text-secondary">Location</h1>
      <p className="mt-4">
        Our charming holiday apartment “Wolke7” welcomes you in Bad Harzburg,
        1.7 kilometres from the center of the spa town of Bad Harzburg.
      </p>
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-b border-primary"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-4 text-sm bg-base-200 text-primary">
            Am Breitenberg 41/3, 38667 Bad Harzburg
          </span>
        </div>
      </div>
      <MapContainer
        center={[51.87879012975221, 10.538890025373371]}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full aspect-[16/9] rounded-lg z-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.87879012975221, 10.538890025373371]}>
          <Popup>Am Breitenberg 41/3, 38667 Bad Harzburg, Deutschland</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default Map;
