import BaseText from "./BaseText";

const DayText = (props) => {
  return <BaseText style={{ fontSize: "14px" }} day={props.day} />;
};
export default DayText;
