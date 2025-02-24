const MatchButton = (props) => {
  const { resDateDay, resTime } = props;
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    padding: "20px 30px",
    border: "1px solid black",
    borderRadius: "10px",
    fontWeight: "800",
    backgroundColor: "white",
  };
  return (
    <button style={style}>
      <span>{resDateDay}</span>
      <span>{resTime}</span>
    </button>
  );
};

export default MatchButton;
