import classNames from "classnames";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
  title: string;
  content: string;
  address: string;
  latitude: number;
  longitude: number;
}

function Map({
  title,
  content,
  address,
  latitude,
  longitude,
  className,
  ...props
}: Props) {
  return (
    <section
      className={classNames(className, "w-screen text-center p-8")}
      {...props}
    >
      <h1 className="text-3xl font-accent text-secondary">{title}</h1>
      <p className="mt-4">{content}</p>
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-b border-primary"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-4 text-sm bg-base-200 text-primary">
            {address}
          </span>
        </div>
      </div>
      <MapContainer
        center={[latitude, longitude]}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full aspect-[16/9] rounded-lg z-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default Map;
