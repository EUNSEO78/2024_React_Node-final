const MatchTeamLogo = (props) => {
  const { homeTeamLogo, oppTeamLogo } = props;
  const style = {
    imgBoxStyle: { width: "70px", height: "70px" },
    imgStyle: { width: "100%", height: "100%", objectFit: "cover" },
    vsStyle: { fontWeight: "800", fontSize: "17px", color: "#878d95" },
  };
  return (
    <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
      <div style={style.imgBoxStyle}>
        <img style={style.imgStyle} src={homeTeamLogo} alt="" />
      </div>
      <span style={style.vsStyle}>VS</span>
      <div style={style.imgBoxStyle}>
        <img style={style.imgStyle} src={oppTeamLogo} alt="" />
      </div>
    </div>
  );
};

export default MatchTeamLogo;
