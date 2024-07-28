import { Carousel } from "flowbite-react";

function GalleryPage() {
  return (
    <div className="w-screen h-screen">
      <Carousel slideInterval={3000} className="w-2/3 m-auto h-2/3">
        <img
          src="/pictures/Schlafzimmer/Doppelbett.jpg"
          alt="..."
          className="aspect-square"
        />
        <img
          src="/pictures/Schlafzimmer/Doppelbett.jpg"
          alt="..."
          className="aspect-square"
        />
        <img
          src="/pictures/Schlafzimmer/Doppelbett.jpg"
          alt="..."
          className="aspect-square"
        />
        <img
          src="/pictures/Schlafzimmer/Doppelbett.jpg"
          alt="..."
          className="aspect-square"
        />
        <img
          src="/pictures/Schlafzimmer/Doppelbett.jpg"
          alt="..."
          className="aspect-square"
        />
      </Carousel>
    </div>
  );
}

export default GalleryPage;
