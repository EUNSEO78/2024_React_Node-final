import ShortcutButton from "./ShortcutButton";

const HotelWeb = (props) => {
  const { hotelWebCom, hotelWebComInfo } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <strong>{hotelWebCom}</strong>
      <p>{hotelWebComInfo}</p>
      <ShortcutButton />
    </div>
  );
};

export default HotelWeb;
