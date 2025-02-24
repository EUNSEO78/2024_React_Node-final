const MatchPlace = (props) => {
  const { place } = props;
  const style = { display: "flex", alignItems: "center", fontSize: "13px" };
  return (
    <div style={style}>
      <span>{place}</span>
    </div>
  );
};

export default MatchPlace;
