const BaseTeamLogo = (props) => {
  const { teamLogo, opposingTeamLogo } = props;
  return (
    <div style={{ width: "70px", height: "70px" }}>
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={teamLogo || opposingTeamLogo}
        alt=""
      />
    </div>
  );
};

export default BaseTeamLogo;
