import MatchDate from "./MatchDate";
import MatchTeamLogo from "./MatchTeamLogo";
import MatchTeamName from "./MatchTeamName";
import MatchPlace from "./MatchPlace";
import MatchButton from "./MatchButton";

const MatchInfoAll = (props) => {
  const {
    date,
    day,
    time,
    teamLogo,
    opposingTeamLogo,
    teamName,
    oppTeamName,
    place,
    buttonTop,
    buttonBottom,
  } = props;
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1120px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        padding: "26px 0",
        borderBottom: "1px solid grey",
      }}
    >
      <MatchDate date={date} day={day} time={time} />
      <MatchTeamLogo teamLogo={teamLogo} opposingTeamLogo={opposingTeamLogo} />
      <MatchTeamName teamName={teamName} oppTeamName={oppTeamName} />
      <MatchPlace place={place} />
      <MatchButton buttonTop={buttonTop} buttonBottom={buttonBottom} />
    </div>
  );
};
export default MatchInfoAll;
