import HotelImg from "./HotelImg";
import HotelWeb from "./HotelWeb";

const HotelWebCard = (props) => {
  const { src, hotelWebCom, hotelWebComInfo } = props;
  return (
    <article
      style={{
        width: "540px",
        height: "214px",
        padding: "32px 28px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        border: "1px solid black",
        borderRadius: "20px",
      }}
    >
      <HotelImg src={src} />
      <HotelWeb hotelWebCom={hotelWebCom} hotelWebComInfo={hotelWebComInfo} />
    </article>
  );
};

export default HotelWebCard;
