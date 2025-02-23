import OpposingTeamName from "../atoms/text/OpposingTeamName";
import TeamName from "../atoms/text/TeamName";

const MatchTeamName = (props) => {
  const { teamName, oppTeamName } = props;
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    fontSize: "16px",
    fontWeight: "800",
    width: "272px",
  };
  return (
    <div style={style}>
      <TeamName teamName={teamName} />
      <span>VS</span>
      <OpposingTeamName oppTeamName={oppTeamName} />
    </div>
  );
};

export default MatchTeamName;
