const BaseText = (props) => {
  const { style } = props;
  const { date, day, time, teamName, oppTeamName, place } = props;
  return (
    <span style={style}>
      {date || day || time || teamName || oppTeamName || place}
    </span>
  );
};

export default BaseText;
