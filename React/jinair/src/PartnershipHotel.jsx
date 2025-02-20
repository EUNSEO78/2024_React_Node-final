import HotelWebCard from "./HotelWebCard";

const PartnershipHotel = () => {
  const objArr = [
    {
      src: "https://images.jinair.com/newHom/images/web/contents/logo-bookingdot.png",
      hotelWebCom: "Booking.com",
      hotelWebComInfo:
        "Browse through popular hotels around the world with no booking fees.",
    },
    {
      src: "https://images.jinair.com/newHom/images/web/contents/logo-hotelscombined_ENG.png",
      hotelWebCom: "HotelsCombined",
      hotelWebComInfo:
        "Compare prices from various traveling agency service vendors in Korea and abroad.",
    },
    {
      src: "https://images.jinair.com/newHom/images/web/contents/logo-tripdot.png",
      hotelWebCom: "Trip.com",
      hotelWebComInfo:
        "Book everything you need to travel around the world, including hotels, rental cars, activities at once and travel smart.",
    },
    {
      src: "https://images.jinair.com/newHom/images/web/contents/logo-rakuten.png",
      hotelWebCom: "Rakuten Travel",
      hotelWebComInfo:
        "Discover high-quality accommodations in Japan on Rakuten Travel, Japan's largest hotel booking site!",
    },
  ];
  return (
    <article
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      {objArr.map((v) => (
        <HotelWebCard {...v} />
      ))}
    </article>
  );
};

export default PartnershipHotel;
