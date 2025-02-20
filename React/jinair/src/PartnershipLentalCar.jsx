import HotelWebCard from "./HotelWebCard";

const PartnershipLentalCar = () => {
  const objArr = [
    {
      src: "https://images.jinair.com/newHom/images/web/contents/logo-sk_ENG.png",
      hotelWebCom: "SK Rent-a-Car",
      hotelWebComInfo: "Enjoy up to 80% discount during off-season.",
    },
  ];
  return (
    <article
      style={{
        display: "grid",
      }}
    >
      {objArr.map((v) => (
        <HotelWebCard {...v} />
      ))}
    </article>
  );
};

export default PartnershipLentalCar;
