import DateText from "../atoms/text/DateText";
import DayText from "../atoms/text/DayText";
import TimeText from "../atoms/text/TimeText";

const MatchDate = (props) => {
  const { date, day, time } = props;
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <DateText date={date} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <DayText day={day} />
        <TimeText time={time} />
      </div>
    </div>
  );
};

export default MatchDate;
