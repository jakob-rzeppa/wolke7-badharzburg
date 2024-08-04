import InformationWithImages from "../sections/InformationWithImages";

function GalleryPage() {
  const rooms = [
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
  ];
  return (
    <>
      <InformationWithImages information={rooms} />
    </>
  );
}

export default GalleryPage;
