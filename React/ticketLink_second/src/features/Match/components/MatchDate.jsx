import Column from "../common/Column";

const MatchDate = (props) => {
  const { date, day, time } = props;
  const style = {
    containerStyle: { display: "flex", gap: "10px", alignItems: "center" },
    dateStyle: { fontSize: "40px" },
  };
  return (
    <div style={style.containerStyle}>
      <span style={style.dateStyle}>{date}</span>
      <Column gap={"5px"}>
        <span>{day}</span>
        <span>{time}</span>
      </Column>
    </div>
  );
};

export default MatchDate;
