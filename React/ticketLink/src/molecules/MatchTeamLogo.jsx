import OpposingTeamLogo from "../atoms/img/OpposingTeamLogo";
import TeamLogo from "../atoms/img/TeamLogo";

const MatchTeamLogo = (props) => {
  const { teamLogo, opposingTeamLogo } = props;
  const style = {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={style}>
      <TeamLogo teamLogo={teamLogo} />
      <span style={{ fontSize: "17px", color: "#878d95", fontWeight: "800" }}>
        VS
      </span>
      <OpposingTeamLogo opposingTeamLogo={opposingTeamLogo} />
    </div>
  );
};

export default MatchTeamLogo;
