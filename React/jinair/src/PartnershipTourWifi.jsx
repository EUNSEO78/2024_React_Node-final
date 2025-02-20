import HotelWebCard from "./HotelWebCard";

const PartnershipTourWifi = () => {
  const objArr = [
    {
      src: "https://images.jinair.com/newHom/images/web/contents/logo-klook.png",
      hotelWebCom: "KLOOK",
      hotelWebComInfo:
        "Enjoy up to 60% discount benefits, guaranteed lowest prices, and easy e-ticket reservations.",
    },
    {
      src: "https://images.jinair.com/newHom/images/web/contents/logo-wifi_ENG.png",
      hotelWebCom: "Wifi Dosirak",
      hotelWebComInfo:
        "Need high data usage abroad? We also offer discounts on overseas USIM and eSIM.",
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

export default PartnershipTourWifi;
