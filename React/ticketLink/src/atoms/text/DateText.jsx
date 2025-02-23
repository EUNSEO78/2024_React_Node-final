import BaseText from "./BaseText";

const DateText = (props) => {
  return <BaseText style={{ fontSize: "40px" }} date={props.date} />;
};

export default DateText;
