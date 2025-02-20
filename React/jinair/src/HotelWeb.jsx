import ShortcutButton from "./ShortcutButton";

const HotelWeb = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <strong>{props.hotelWebCom}</strong>
      <p>{props.hotelWebComInfo}</p>
      <ShortcutButton />
    </div>
  );
};

export default HotelWeb;
