const MatchTeamName = (props) => {
  const { homeTeamName, oppTeamName } = props;
  const style = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "16px",
    fontWeight: "800",
  };
  return (
    <div style={style}>
      <span>{homeTeamName}</span>
      <span>VS</span>
      <span>{oppTeamName}</span>
    </div>
  );
};

export default MatchTeamName;
