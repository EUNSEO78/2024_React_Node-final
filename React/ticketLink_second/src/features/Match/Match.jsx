import MatchButton from "./components/MatchButton";
import MatchDate from "./components/MatchDate";
import MatchPlace from "./components/MatchPlace";
import MatchTeamLogo from "./components/MatchTeamLogo";
import MatchTeamName from "./components/MatchTeamName";

const Match = () => {
  const style = {
    width: "1120px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-Between",
    borderBottom: "1px solid grey",
    padding: "26px 0",
  };
  return (
    <div style={style}>
      <MatchDate date={"03.09"} day={"(일)"} time={"16:30"} />
      <MatchTeamLogo
        homeTeamLogo={
          "https://image.toast.com/aaaaab/ticketlink/TKL_8/new_Jeonbuk.png"
        }
        oppTeamLogo={
          "https://image.toast.com/aaaaab/ticketlink/TKL_6/Gangwon.png"
        }
      />
      <MatchTeamName homeTeamName={"전북현대"} oppTeamName={"강원"} />
      <MatchPlace place={"전주월드컵경기장"} />
      <MatchButton resDateDay={"2025.03.04 (화)"} resTime={"11:00 오픈예정"} />
    </div>
  );
};

export default Match;
