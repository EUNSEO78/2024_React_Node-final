import PlaceName from "../atoms/text/PlaceName";

const MatchPlace = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "center", fontSize: "13px" }}>
      <PlaceName place={props.place} />
    </div>
  );
};

export default MatchPlace;
